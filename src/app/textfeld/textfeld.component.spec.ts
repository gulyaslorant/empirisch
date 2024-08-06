import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfeldComponent } from './textfeld.component';

describe('TextfeldComponent', () => {
  let component: TextfeldComponent;
  let fixture: ComponentFixture<TextfeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextfeldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
