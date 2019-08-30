import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translucent',
  templateUrl: './translucent.page.html',
  styleUrls: ['./translucent.page.scss'],
})
export class TranslucentPage implements OnInit {

  public items: number[] = [];
  
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
  }

}
