import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-sub-progress-bar',
  templateUrl: './sub-progress-bar.component.html',
  styleUrls: ['./sub-progress-bar.component.css']
})
export class SubProgressBarComponent implements OnInit {
  
  @Input() steps: Step[];
  @Input() activeStepId: string;

  constructor() {
  }

  ngOnInit() {
  }

  getDisplayClass(stepId: string): string {
    if (this.activeStepId === 'homeCompleted') {
      return 'finished';
    }
    if (this.activeStepId === stepId) {
      return 'current';
    }
    const activeStep = this.steps.find(step => step.id === this.activeStepId);
    const thisStep = this.steps.find(step => step.id === stepId);
    if (activeStep && thisStep && thisStep.order < activeStep.order) {
      return 'finished';
    } else {
      return '';
    }
  }
}

export type Step = {
  id: string, order: number, name: string
}