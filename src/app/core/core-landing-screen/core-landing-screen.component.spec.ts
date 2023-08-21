import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLandingScreenComponent } from './core-landing-screen.component';

describe('CoreLandingScreenComponent', () => {
  let component: CoreLandingScreenComponent;
  let fixture: ComponentFixture<CoreLandingScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreLandingScreenComponent]
    });
    fixture = TestBed.createComponent(CoreLandingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
