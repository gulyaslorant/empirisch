import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@Component({
  selector: "app-snackbar",
  standalone: true,
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"],
  imports: [MatSnackBarModule],
  changeDetection: ChangeDetectionStrategy.OnPush, // Change Detection auf OnPush setzen
})
export class SnackbarComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.openSnackBar();
  }

  openSnackBar() {
    this.snackBar.open(
      "Das ist ein Experiment für eine Bachelorarbeit",
      "Schließen",
      {
        duration: 5000,
        horizontalPosition: "center",
        verticalPosition: "bottom",
        panelClass: ["custom-snackbar"],
      },
    );
  }
}
