import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SelectfieldComponent } from "./selectfield/selectfield.component";
import { MenupunktComponent } from "./menupunkt/menupunkt.component";
import { SeitenleisteComponent } from "./seitenleiste/seitenleiste.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    MenupunktComponent,
    SeitenleisteComponent,
    SelectfieldComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "Der Empirische Teil";
}
