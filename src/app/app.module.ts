import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { BugComponent } from "./bug/bug.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SideNavbarComponent } from "./side-navbar/side-navbar.component";
import { WorkComponent } from "./work/work.component";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { TableOfContentsComponent } from "./project-detail/table-of-contents/table-of-contents.component";
import { ImageCarouselComponent } from "./projects/image-carousel/image-carousel.component";
import { TruncatePipe } from "./truncate.pipe";
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions,
} from "ngx-highlightjs";
import { CodeSnippetComponent } from "./project-detail/code-snippet/code-snippet.component";
import { SectionHeadingComponent } from "./project-detail/section-heading/section-heading.component";
import { SubsectionHeadingComponent } from "./project-detail/subsection-heading/subsection-heading.component";
import { ProjectDetailDirective } from "./project-detail.directive";
import { Project1Component } from "./project-detail/projects/project1/project1.component";
import { Project2Component } from "./project-detail/projects/project2/project2.component";
import { Project3Component } from "./project-detail/projects/project3/project3.component";
import { Project4Component } from "./project-detail/projects/project4/project4.component";
import { Project5Component } from "./project-detail/projects/project5/project5.component";
import { Project6Component } from "./project-detail/projects/project6/project6.component";
import { Project7Component } from "./project-detail/projects/project7/project7.component";
import { Project9Component } from "./project-detail/projects/project9/project9.component";
import { Project10Component } from "./project-detail/projects/project10/project10.component";
import { Project11Component } from "./project-detail/projects/project11/project11.component";
import { Project12Component } from "./project-detail/projects/project12/project12.component";
import { Project13Component } from "./project-detail/projects/project13/project13.component";
import { Project14Component } from "./project-detail/projects/project14/project14.component";
import { Project15Component } from "./project-detail/projects/project15/project15.component";
import { Project16Component } from "./project-detail/projects/project16/project16.component";
import { Project17Component } from "./project-detail/projects/project17/project17.component";
import { Project18Component } from "./project-detail/projects/project18/project18.component";
import { Project19Component } from "./project-detail/projects/project19/project19.component";

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
    TruncatePipe,
    CodeSnippetComponent,
    SectionHeadingComponent,
    SubsectionHeadingComponent,
    ProjectDetailDirective,
    Project1Component,
    Project2Component,
    Project3Component,
    Project4Component,
    Project5Component,
    Project6Component,
    Project7Component,
    Project9Component,
    Project10Component,
    Project11Component,
    Project12Component,
    Project13Component,
    Project14Component,
    Project15Component,
    Project16Component,
    Project17Component,
    Project18Component,
    Project19Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        coreLibraryLoader: () => import("highlight.js/lib/core"),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        lineNumbersLoader: () => import("highlightjs-line-numbers.js"),
        themePath: "node_modules/highlight.js/styles/github.css",
        languages: {
          typescript: () => import("highlight.js/lib/languages/typescript"),
          json: () => import("highlight.js/lib/languages/json"),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
