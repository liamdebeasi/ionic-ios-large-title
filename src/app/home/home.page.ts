import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [];
  
  constructor() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
  }

}
