import { Component } from "@angular/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-checkbox",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatButtonToggleModule,
  ],
  templateUrl: "./checkbx.component.html",
  styleUrls: ["./checkbx.component.scss"],
})
export class CheckboxComponent {
  checked = false;
  sliderValue = 50; // Der initiale Wert sollte gesetzt sein
  toggleValue = "left";
}
