import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbxComponent } from './checkbx.component';

describe('CheckbxComponent', () => {
  let component: CheckbxComponent;
  let fixture: ComponentFixture<CheckbxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckbxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckbxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
