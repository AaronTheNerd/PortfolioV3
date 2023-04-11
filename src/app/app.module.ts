import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BugComponent } from './bug/bug.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { WorkComponent } from './work/work.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { TableOfContentsComponent } from './project-detail/table-of-contents/table-of-contents.component';
import { ImageCarouselComponent } from './projects/image-carousel/image-carousel.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BugComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    SideNavbarComponent,
    WorkComponent,
    ProjectDetailComponent,
    TableOfContentsComponent,
    ImageCarouselComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
