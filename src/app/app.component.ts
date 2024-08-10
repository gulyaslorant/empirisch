import { Component, Type } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SeitenleisteComponent } from "./seitenleiste/seitenleiste.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule, ToolbarComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Der Empirische Teil";
  currentView: string = "home"; // Standardansicht auf 'home' setzen

  // Explicitly define the type as Promise<Type<any>>
  loadMenu: Promise<Type<any>> = import("./menupunkt/menupunkt.component").then(
    (m) => m.MenupunktComponent,
  );
  loadSeitenleiste: Promise<Type<any>> = import(
    "./seitenleiste/seitenleiste.component"
  ).then((m) => m.SeitenleisteComponent);
  loadToolbar: Promise<Type<any>> = import("./toolbar/toolbar.component").then(
    (m) => m.ToolbarComponent,
  );
  loadSelectfield: Promise<Type<any>> = import(
    "./selectfield/selectfield.component"
  ).then((m) => m.SelectfieldComponent);
  loadSnackbar: Promise<Type<any>> = import(
    "./snackbar/snackbar.component"
  ).then((m) => m.SnackbarComponent);
  loadCheckbx: Promise<Type<any>> = import("./checkbx/checkbx.component").then(
    (m) => m.CheckboxComponent,
  );
  loadExpansion: Promise<Type<any>> = import(
    "./expansion/expansion.component"
  ).then((m) => m.ExpansionPanelComponent);

  ngOnInit() {}
}
