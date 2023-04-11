import { Language } from "../_data/languages";

export interface IProject {
  id: number;
  title: string;
  school: boolean;
  languages: Language[];
  sections: IDetailSection[];
  tags: string[];
  modified: Date;
  created: Date;
  gitLink?: string;
  thumbnails: string[];
}

export interface IDetailSection {
  id: string;
  title?: string;
  content: string;
  subsections: IDetailSection[];
}