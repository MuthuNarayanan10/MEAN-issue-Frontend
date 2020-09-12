import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcompletedissueComponent } from './viewcompletedissue.component';

describe('ViewcompletedissueComponent', () => {
  let component: ViewcompletedissueComponent;
  let fixture: ComponentFixture<ViewcompletedissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcompletedissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcompletedissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
