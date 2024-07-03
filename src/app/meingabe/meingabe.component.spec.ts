import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeingabeComponent } from './meingabe.component';

describe('MeingabeComponent', () => {
  let component: MeingabeComponent;
  let fixture: ComponentFixture<MeingabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeingabeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeingabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
