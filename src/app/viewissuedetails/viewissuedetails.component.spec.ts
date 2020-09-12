import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewissuedetailsComponent } from './viewissuedetails.component';

describe('ViewissuedetailsComponent', () => {
  let component: ViewissuedetailsComponent;
  let fixture: ComponentFixture<ViewissuedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewissuedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewissuedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
