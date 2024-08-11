import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupunktComponent } from './menupunkt.component';

describe('MenupunktComponent', () => {
  let component: MenupunktComponent;
  let fixture: ComponentFixture<MenupunktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenupunktComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenupunktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
