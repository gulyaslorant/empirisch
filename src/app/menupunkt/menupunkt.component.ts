import { Component } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
/**
 * @title Nested menu
 */
@Component({
  selector: "app-menupunkt",
  styleUrls: ["menupunkt.component.scss"],
  templateUrl: "menupunkt.component.html",
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
})
export class MenupunktComponent {}
