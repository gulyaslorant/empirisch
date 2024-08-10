import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-expansion",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./expansion.component.html",
  styleUrls: ["./expansion.component.scss"],
  animations: [
    trigger("transitionMessages", [
      state("void", style({ opacity: 0 })),
      state("*", style({ opacity: 1 })),
      transition(":enter", [
        style({ opacity: 0 }),
        animate("300ms ease-in", style({ opacity: 1 })),
      ]),
      transition(":leave", [animate("300ms ease-out", style({ opacity: 0 }))]),
    ]),
  ],
})
export class ExpansionComponent {}
