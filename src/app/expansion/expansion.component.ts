import { Component } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { CommonModule } from "@angular/common";
import { CheckboxComponent } from "../checkbx/checkbx.component";

@Component({
  selector: "app-expansion",
  standalone: true,
  imports: [CommonModule, MatExpansionModule, CheckboxComponent],
  templateUrl: "./expansion.component.html",
  styleUrls: ["./expansion.component.scss"],
})
export class ExpansionPanelComponent {}
