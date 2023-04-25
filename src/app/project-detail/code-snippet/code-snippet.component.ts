import { Component, Input } from "@angular/core";
import { HighlightLoader } from "ngx-highlightjs";

const theme = "assets/styles/oneDarkProDarker.css";

@Component({
  selector: "app-code-snippet",
  templateUrl: "./code-snippet.component.html",
  styleUrls: ["./code-snippet.component.css"],
})
export class CodeSnippetComponent {
  @Input() content = "";
  @Input() languages: string[] = ["typescript"];
  @Input() lineNumbers = true;

  constructor(private hljsLoader: HighlightLoader) {
    this.hljsLoader.setTheme(theme);
  }
}
