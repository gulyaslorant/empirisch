import { Component } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";

@Component({
  standalone: true,
  selector: "app-untenfenster",
  templateUrl: "./untenfenster.component.html",
  styleUrls: ["./untenfenster.component.scss"],
  imports: [], // Entferne MatBottomSheetRef hier
})
export class UntenfensterComponent {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<UntenfensterComponent>,
  ) {}

  openLink(event: MouseEvent, link: string): void {
    window.open(link, "_blank");
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
