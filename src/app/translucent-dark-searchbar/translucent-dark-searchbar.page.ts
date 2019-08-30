import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translucent-dark-searchbar',
  templateUrl: './translucent-dark-searchbar.page.html',
  styleUrls: ['./translucent-dark-searchbar.page.scss'],
})
export class TranslucentDarkSearchbarPage implements OnInit {

  public items: number[] = [];
  
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
  }

}
