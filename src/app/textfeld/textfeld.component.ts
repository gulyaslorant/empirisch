import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: "app-textfeld",
  standalone: true,
  templateUrl: "./textfeld.component.html",
  styleUrls: ["./textfeld.component.scss"],
  imports: [CommonModule, MatDividerModule],
})
export class TextfeldComponent {}
