import { Component } from "@angular/core";
import { MatDialogRef, MatDialogModule } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-visit-dialog",
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: "./visit-dialog.component.html",
  styleUrls: ["./visit-dialog.component.scss"],
})
export class VisitDialogComponent {
  constructor(public dialogRef: MatDialogRef<VisitDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
