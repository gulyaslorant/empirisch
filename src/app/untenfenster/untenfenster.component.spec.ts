import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UntenfensterComponent } from './untenfenster.component';

describe('UntenfensterComponent', () => {
  let component: UntenfensterComponent;
  let fixture: ComponentFixture<UntenfensterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UntenfensterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UntenfensterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
