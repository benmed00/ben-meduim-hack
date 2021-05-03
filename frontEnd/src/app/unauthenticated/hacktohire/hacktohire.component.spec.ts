import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacktohireComponent } from './hacktohire.component';

describe('HacktohireComponent', () => {
  let component: HacktohireComponent;
  let fixture: ComponentFixture<HacktohireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HacktohireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HacktohireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
