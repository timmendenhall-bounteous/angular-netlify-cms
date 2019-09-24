import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetlifyCmsComponent } from './netlify-cms.component';

describe('NetlifyCmsComponent', () => {
  let component: NetlifyCmsComponent;
  let fixture: ComponentFixture<NetlifyCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetlifyCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetlifyCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
