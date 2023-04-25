import { Type } from "@angular/core";
import { IProjectComponent } from "../project-detail/project.component";
import { Language } from "../_data/languages";

export interface IProject {
  id: number;
  title: string;
  school: boolean;
  languages: Language[];
  description: string;
  component: Type<IProjectComponent>;
  sections: ISection[];
  tags: string[];
  modified: Date;
  created: Date;
  gitLink?: string;
  thumbnails: string[];
  favorite?: boolean;
}

export interface ISection {
  id: string;
  title: string;
  subsections: ISection[];
}
