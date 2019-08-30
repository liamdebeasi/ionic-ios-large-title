import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar-dark',
  templateUrl: './searchbar-dark.page.html',
  styleUrls: ['./searchbar-dark.page.scss'],
})
export class SearchbarDarkPage implements OnInit {

  public items: number[] = [];
  
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
  }
}
