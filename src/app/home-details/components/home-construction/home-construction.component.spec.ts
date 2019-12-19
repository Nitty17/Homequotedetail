import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConstructionComponent } from './home-construction.component';

describe('HomeConstructionComponent', () => {
  let component: HomeConstructionComponent;
  let fixture: ComponentFixture<HomeConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
