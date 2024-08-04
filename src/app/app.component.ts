import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TablisteComponent } from "./tabliste/tabliste.component";
import { SelectfieldComponent } from "./selectfield/selectfield.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SelectfieldComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "Der Empirische Teil";
}
