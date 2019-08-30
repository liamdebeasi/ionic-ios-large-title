import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslucentPage } from './translucent.page';

describe('TranslucentPage', () => {
  let component: TranslucentPage;
  let fixture: ComponentFixture<TranslucentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslucentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslucentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
