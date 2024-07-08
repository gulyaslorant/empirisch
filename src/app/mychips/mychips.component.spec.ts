import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mychips } from './mychips.component';

describe('MychipsComponent', () => {
  let component: mychips;
  let fixture: ComponentFixture<mychips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [mychips],
    }).compileComponents();

    fixture = TestBed.createComponent(mychips);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
