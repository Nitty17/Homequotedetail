import { Component, OnInit } from "@angular/core";
import { masterJson } from "../utils/json/home-details";
import { Step } from "../common/components/sub-progress-bar/sub-progress-bar.component";

import { HomeDetailsService } from './home-details.service';

@Component({
  selector: "app-home-details",
  templateUrl: "./home-details.component.html",
  styleUrls: ["./home-details.component.css"]
})
export class HomeDetailsComponent implements OnInit {
  tabs: string[] = masterJson.pages[0].tabs;
  uiData: any[] = masterJson.pages[0].pages;
  steps: Step[] = [
    { id: "yourHome", order: 1, name: "Your home" },
    { id: "homeConstruction", order: 2, name: "Home construction" },
    { id: "homeProtection", order: 3, name: "Home protection" }
  ];
  constructor(private homeDetailService: HomeDetailsService) {}

  ngOnInit() {}

  /**
   * @description To fetch available home types
   */
  populate_home_types = () => {
    console.log("working-yes");
  };

  /**
   * @description it redirects page to "Home construction" page
   */
  home_construction_func = () => {
    throw new Error("Functionality not implemented");
  };

  /**
   * @description This function is called whenever back button is pressed on component
   */
  back_func = () => {
    throw new Error("Functionality not implemented");
  };

  /**
   * @description this function executes function available within the context
   * @param func function name
   */
  executeFunction(func: string) {
    eval("this." + func);
  }

  handleSubmit() {
    this.homeDetailService
      .getHomeDetails()
      .subscribe(res => {
        console.log('home details', res);
      });
  }
}
