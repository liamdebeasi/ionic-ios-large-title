import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslucentDarkPage } from './translucent-dark.page';

describe('TranslucentDarkPage', () => {
  let component: TranslucentDarkPage;
  let fixture: ComponentFixture<TranslucentDarkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslucentDarkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslucentDarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
