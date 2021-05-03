/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TumbsUpComponent } from './tumbsUp.component';

describe('TumbsUpComponent', () => {
  let component: TumbsUpComponent;
  let fixture: ComponentFixture<TumbsUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TumbsUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TumbsUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
