import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslucentDarkSearchbarPage } from './translucent-dark-searchbar.page';

describe('TranslucentDarkSearchbarPage', () => {
  let component: TranslucentDarkSearchbarPage;
  let fixture: ComponentFixture<TranslucentDarkSearchbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslucentDarkSearchbarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslucentDarkSearchbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
