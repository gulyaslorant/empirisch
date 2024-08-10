import { Component } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { ToolbarComponent } from "../toolbar/toolbar.component";
/**
 * @title Nested menu
 */
@Component({
  selector: "app-menupunkt",
  styleUrls: ["menupunkt.component.scss"],
  templateUrl: "menupunkt.component.html",
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, ToolbarComponent],
})
export class MenupunktComponent {}
