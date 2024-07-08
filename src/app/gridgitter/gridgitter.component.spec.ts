import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGitterComponent } from './gridgitter.component';

describe('GridgitterComponent', () => {
  let component: GridGitterComponent;
  let fixture: ComponentFixture<GridGitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridGitterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GridGitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
