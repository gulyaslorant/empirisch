import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MeingabeComponent } from "./meingabe/meingabe.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, MeingabeComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "Der Empirische Teil";
}
