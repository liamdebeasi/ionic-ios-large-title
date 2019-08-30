import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translucent-dark',
  templateUrl: './translucent-dark.page.html',
  styleUrls: ['./translucent-dark.page.scss'],
})
export class TranslucentDarkPage implements OnInit {

  public items: number[] = [];
  
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
  }

}
