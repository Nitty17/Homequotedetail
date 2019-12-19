import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { Step } from "../../common/components/sub-progress-bar/sub-progress-bar.component";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.css"]
})
export class AboutMeComponent implements OnInit {
  steps: Step[] = [
    { id: "aboutme", order: 1, name: "About Me" },
    { id: "discounts", order: 2, name: "Discounts" }
  ];
  @Input() data: any;
  @Output() onSubmit = new EventEmitter();
  @Output() onBack = new EventEmitter();

  formGroup: FormGroup;
  constructor() {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      policyType: new FormControl(this.data.policyType),
      prefix: new FormControl(this.data.prefix),
      suffix: new FormControl(this.data.suffix),
      firstName: new FormControl(this.data.firstName),
      lastName: new FormControl(this.data.lastName),
      email: new FormControl(this.data.email),
      dob: new FormGroup({
        day: new FormControl(this.data.dob.day),
        month: new FormControl(this.data.dob.month),
        year: new FormControl(this.data.dob.year)
      }),
      gender: new FormControl(this.data.gender),
      maritalStatus: new FormControl(this.data.maritalStatus),
      contactNumber: new FormControl(this.data.contactNumber),
      isMobileNumber: new FormControl(this.data.isMobileNumber),
      address: new FormGroup({
        street: new FormControl(this.data.address.street),
        aptNumber: new FormControl(this.data.address.aptNumber)
      })
    });
  }

  getSelectedAddress(place: object) {
    console.log("TCL: AboutMeComponent -> getSelectedAddress", place);
    // this.userEnteredAddress = this.googlePlaceService.getFullAddress(place);
    // this.isAddressAvailable=true;
    // this.finalAddress = this.userEnteredAddress.toDisplayString();
    // this.addressChanged = true;
    // this.saveUserWithAddressToSession();
  }

  submit() {
    this.onSubmit.emit(this.formGroup.value);
  }

  goBack() {
    this.onBack.emit();
  }
}
