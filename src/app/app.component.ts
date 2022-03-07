import { Component } from '@angular/core';
import {CHANGE_FLAGS, INITIAL_DATA, MODIFIED_DATA} from "./json/mock-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = {
    INITIAL_DATA,
    MODIFIED_DATA,
    CHANGE_FLAGS
  }


  constructor() {
  }
}
