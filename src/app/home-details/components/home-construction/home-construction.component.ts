import { Component, OnInit } from '@angular/core';
import { construction } from '../../../utils/json/home-construction';

@Component({
  selector: 'app-home-construction',
  templateUrl: './construction.html',
  styleUrls: ['./home-construction.component.css']
})
export class HomeConstructionComponent implements OnInit {
  tabs: string[] = construction.pages[0].tabs;
  uiData: any[] = construction.pages[0].pages;
  header: any = construction.pages[0].header;
  constructor() { }

  ngOnInit() {
  }
  home_protection_func = () => {
    throw new Error('Functionality not implemented');
  }

  back_func = () => {
    throw new Error('Functionality not implemented');
  }

  executeFunction(func: string) {
    eval("this." + func);
  }
}
