import { HttpClient } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-github-card",
  templateUrl: "./github-card.component.html",
  styleUrls: ["./github-card.component.css"],
})
export class GithubCardComponent {
  @Input() link = "";
  gitIcon = faGithub;

  constructor(private http: HttpClient) {}

  goToLink() {
    window.open(this.link, "_blank");
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.link);
  }

  getTitle(): Observable<string> {
    return this.getData().pipe(
      switchMap((project) => {
        return of(project.title);
      })
    );
  }
}
