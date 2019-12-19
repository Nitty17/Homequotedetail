import { Component, OnInit } from "@angular/core";
import { masterJson } from "../utils/home-protection";

import { Step } from "../common/components/sub-progress-bar/sub-progress-bar.component";

@Component({
  selector: "app-home-protection",
  templateUrl: "./home-protection.component.html",
  styleUrls: ["./home-protection.component.css"]
})
export class HomeProtectionComponent implements OnInit {
  tabs: string[] = masterJson.pages[0].tabs;
  uiData: any[] = masterJson.pages[0].pages;
  steps: Step[] = [
    { id: "yourHome", order: 1, name: "Your home" },
    { id: "homeConstruction", order: 2, name: "Home construction" },
    { id: "homeProtection", order: 3, name: "Home protection" }
  ];
  constructor() {}

  ngOnInit() {}

  populate_home_type = () => {
    console.log("working-yes");
  };

  back_func = () => {
    throw new Error("Functionality not implemented");
  };

  executeFunction(func: string) {
    eval("this." + func);
  }
}
