import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablisteComponent } from './tabliste.component';

describe('TablisteComponent', () => {
  let component: TablisteComponent;
  let fixture: ComponentFixture<TablisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablisteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
