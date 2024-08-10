import { Component, Type } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Der Empirische Teil";

  // Explicitly define the type as Promise<Type<any>>
  loadSeitenleiste: Promise<Type<any>> = import(
    "./seitenleiste/seitenleiste.component"
  ).then((m) => m.SeitenleisteComponent);
  loadMenupunkt: Promise<Type<any>> = import(
    "./menupunkt/menupunkt.component"
  ).then((m) => m.MenupunktComponent);
  loadSelectfield: Promise<Type<any>> = import(
    "./selectfield/selectfield.component"
  ).then((m) => m.SelectfieldComponent);
  loadSnackbar: Promise<Type<any>> = import(
    "./snackbar/snackbar.component"
  ).then((m) => m.SnackbarComponent);

  ngOnInit() {}
}
