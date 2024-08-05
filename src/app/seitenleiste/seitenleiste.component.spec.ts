import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeitenleisteComponent } from './seitenleiste.component';

describe('SeitenleisteComponent', () => {
  let component: SeitenleisteComponent;
  let fixture: ComponentFixture<SeitenleisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeitenleisteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeitenleisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
