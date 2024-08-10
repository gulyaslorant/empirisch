import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { SelectfieldComponent } from "../selectfield/selectfield.component";
import { ExpansionPanelComponent } from "../expansion/expansion.component";
import { CommonModule } from "@angular/common"; // Wichtig für *ngIf und andere Common Features

@Component({
  selector: "app-toolbar",
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    CommonModule,
    SelectfieldComponent,
    ExpansionPanelComponent, // Um *ngIf zu unterstützen
  ],
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent {
  currentView: string = "home"; // Standardansicht auf 'home' setzen

  // Methode zum Setzen der aktuellen Ansicht
  setView(view: string): void {
    this.currentView = view;
  }
}
