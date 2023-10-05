import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandalonComponent } from './standalon.component';

describe('StandalonComponent', () => {
  let component: StandalonComponent;
  let fixture: ComponentFixture<StandalonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StandalonComponent]
    });
    fixture = TestBed.createComponent(StandalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
