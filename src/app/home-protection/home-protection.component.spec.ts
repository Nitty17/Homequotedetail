import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProtectionComponent } from './home-protection.component';

describe('HomeProtectionComponent', () => {
  let component: HomeProtectionComponent;
  let fixture: ComponentFixture<HomeProtectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProtectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
