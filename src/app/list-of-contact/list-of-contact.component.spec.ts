import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfContactComponent } from './list-of-contact.component';

describe('ListOfContactComponent', () => {
  let component: ListOfContactComponent;
  let fixture: ComponentFixture<ListOfContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
