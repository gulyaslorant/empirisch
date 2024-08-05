import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablefeldComponent } from './tablefeld.component';

describe('TablefeldComponent', () => {
  let component: TablefeldComponent;
  let fixture: ComponentFixture<TablefeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablefeldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablefeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
