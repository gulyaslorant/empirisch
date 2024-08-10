import { Component } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";
import { TablisteComponent } from "../tabliste/tabliste.component";
import { TablefeldComponent } from "../tablefeld/tablefeld.component";

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
  ],
})
export class SelectfieldComponent {
  options = [
    { value: "tabliste", viewValue: "Tabliste" },
    { value: "tablefeld", viewValue: "Tablefeld" },
    { value: "option3", viewValue: "Option 3" },
  ];

  selectedOption: string = "";

  onSelectionChange(event: any) {
    this.selectedOption = event.value;
  }
}
