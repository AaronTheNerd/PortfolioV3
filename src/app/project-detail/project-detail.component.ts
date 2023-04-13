import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ProjectService } from "../project.service";
import { IProject } from "../interfaces/project";

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.css"],
})
export class ProjectDetailComponent {
  project: IProject;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {
    this.project = this.getProject();
  }

  getProject(): IProject {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    return this.projectService.getProject(id);
  }
}
