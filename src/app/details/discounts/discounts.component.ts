import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Step } from "../../common/components/sub-progress-bar/sub-progress-bar.component";

@Component({
  selector: "app-discounts",
  templateUrl: "./discounts.component.html",
  styleUrls: ["./discounts.component.css"]
})
export class DiscountsComponent implements OnInit {
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
      aaaMembership: new FormControl(this.data.aaaMembership),
      aaaAutoInsurance: new FormControl(this.data.aaaAutoInsurance),
      aaaLifeInsurance: new FormControl(this.data.aaaLifeInsurance),
      firstInsurance: new FormControl(this.data.firstInsurance)
    });
  }

  goBack() {
    this.onBack.emit();
  }

  submit() {
    this.onSubmit.emit(this.formGroup.value);
  }
}
