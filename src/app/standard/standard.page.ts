import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.page.html',
  styleUrls: ['./standard.page.scss'],
})
export class StandardPage implements OnInit {

  public items: number[] = [];
  
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
  }

}
