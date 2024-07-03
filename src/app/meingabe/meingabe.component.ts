import { Component } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-meingabe",
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule],
  templateUrl: "./meingabe.component.html",
  styleUrl: "./meingabe.component.scss",
})
export class MeingabeComponent {}
