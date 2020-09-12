import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Editissue1Component } from './editissue1.component';

describe('Editissue1Component', () => {
  let component: Editissue1Component;
  let fixture: ComponentFixture<Editissue1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editissue1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Editissue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
