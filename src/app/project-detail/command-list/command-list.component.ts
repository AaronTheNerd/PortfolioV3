import { Component, Input } from "@angular/core";
import { ICommand } from "../command.interface";

@Component({
  selector: "app-command-list",
  templateUrl: "./command-list.component.html",
  styleUrls: ["./command-list.component.css"],
})
export class CommandListComponent {
  @Input() commands: ICommand[] = [];
}
