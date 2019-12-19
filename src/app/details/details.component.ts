import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  page: "aboutme" | "discounts" = "aboutme";
  data = {
    about: {
      policyType: "homeOwners",
      prefix: "",
      suffix: "",
      firstName: "",
      lastName: "",
      email: "",
      dob: {
        day: "",
        month: "",
        year: ""
      },
      gender: "",
      maritalStatus: "",
      contactNumber: "",
      isMobileNumber: false,
      address: {
        street: "",
        aptNumber: ""
      }
    },
    discount: {
      aaaMembership: false,
      aaaAutoInsurance: false,
      aaaLifeInsurance: false,
      firstInsurance: ""
    }
  };

  constructor() {}

  ngOnInit() {}

  onAboutFormSubmit(values: any) {
    this.data.about = values;
    // go to next slide
    this.page = "discounts";
  }

  onAboutBack() {
    // handle this
    console.log("BACK");
  }

  onDiscountFormSubmit(values: any) {
    this.data.discount = values;
    console.log(this.data.discount);
    // go to next slide
    // this.page = "discounts";
  }

  onDiscountBack() {
    // handle this
    this.page = "aboutme";
  }
}
