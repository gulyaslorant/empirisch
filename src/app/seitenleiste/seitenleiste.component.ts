import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";

/**
 * @title Autosize sidenav
 */
@Component({
  selector: "app-seitenleiste",
  templateUrl: "seitenleiste.component.html",
  styleUrl: "seitenleiste.component.scss",
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
})
export class SeitenleisteComponent {
  showFiller = false;
}
