import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarDarkPage } from './searchbar-dark.page';

describe('SearchbarDarkPage', () => {
  let component: SearchbarDarkPage;
  let fixture: ComponentFixture<SearchbarDarkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbarDarkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarDarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
