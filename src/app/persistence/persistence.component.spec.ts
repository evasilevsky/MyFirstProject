/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersistenceComponent } from './persistence.component';

describe('PersistenceComponent', () => {
  let component: PersistenceComponent;
  let fixture: ComponentFixture<PersistenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
