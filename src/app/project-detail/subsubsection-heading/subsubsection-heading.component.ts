import { Component, Input } from "@angular/core";

@Component({
  selector: "app-subsubsection-heading",
  templateUrl: "./subsubsection-heading.component.html",
  styleUrls: ["./subsubsection-heading.component.css"],
})
export class SubsubsectionHeadingComponent {
  @Input() title = "";
}
