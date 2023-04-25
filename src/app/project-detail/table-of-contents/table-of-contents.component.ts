import { ViewportScroller } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ISection } from "src/app/interfaces/project";

@Component({
  selector: "app-table-of-contents",
  templateUrl: "./table-of-contents.component.html",
  styleUrls: ["./table-of-contents.component.css"],
})
export class TableOfContentsComponent {
  @Input() sections: ISection[] = [];

  constructor(public scroller: ViewportScroller) {}
}
