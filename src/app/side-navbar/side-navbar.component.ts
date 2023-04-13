import { Component } from "@angular/core";
import { NAV_ITEMS } from "../_data/navbar";
import { INavbarItem } from "../interfaces/navbar";

@Component({
  selector: "app-side-navbar",
  templateUrl: "./side-navbar.component.html",
  styleUrls: ["./side-navbar.component.css"],
})
export class SideNavbarComponent {
  routes: INavbarItem[] = NAV_ITEMS;
}
