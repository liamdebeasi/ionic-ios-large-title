import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardPage } from './standard.page';

describe('StandardPage', () => {
  let component: StandardPage;
  let fixture: ComponentFixture<StandardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
