import { Component, OnDestroy } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";
import { TablisteComponent } from "../tabliste/tabliste.component";
import { TablefeldComponent } from "../tablefeld/tablefeld.component";
import { StepperComponent } from "../stepper/stepper.component";
import { SeitenleisteComponent } from '../seitenleiste/seitenleiste.component';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-selectfield',
  standalone: true,
  templateUrl: './selectfield.component.html',
  styleUrls: ['./selectfield.component.scss'],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    TablisteComponent,
    TablefeldComponent,
    StepperComponent,
    SeitenleisteComponent,
  ],
})
export class SelectfieldComponent implements OnDestroy {
  options = [
    { value: 'tabliste', viewValue: 'Tabliste' },
    { value: 'tablefeld', viewValue: 'Tablefeld' },
    { value: 'stepper', viewValue: 'Stepper Modul' },
  ];

  selectedOption: string = 'tablefeld';

  loadSeitenleiste: Observable<typeof SeitenleisteComponent>;
  private subscription: Subscription = new Subscription();

  constructor() {
    // SeitenleisteComponent und MenupunktComponent als Observable definieren
    this.loadSeitenleiste = of(SeitenleisteComponent);
  }

  onSelectionChange(event: any) {
    this.selectedOption = event.value;
  }

  ngOnDestroy() {
    // Unsubscribe von allen Subscriptions, um sicherzustellen, dass keine Memory Leaks auftreten
    this.subscription.unsubscribe();
  }
}
