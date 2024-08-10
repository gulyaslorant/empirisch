import { Component } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";
import { TablisteComponent } from "../tabliste/tabliste.component";
import { TablefeldComponent } from "../tablefeld/tablefeld.component";
import { StepperComponent } from "../stepper/stepper.component";

@Component({
  selector: "app-selectfield",
  standalone: true,
  templateUrl: "./selectfield.component.html",
  styleUrls: ["./selectfield.component.scss"],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    TablisteComponent,
    TablefeldComponent,
    StepperComponent,
  ],
})
export class SelectfieldComponent {
  options = [
    { value: "tabliste", viewValue: "Tabliste" },
    { value: "tablefeld", viewValue: "Tablefeld" },
    { value: "stepper", viewValue: "Stepper Modul" },
  ];

  selectedOption: string = "tablefeld";

  onSelectionChange(event: any) {
    this.selectedOption = event.value;
  }
}
