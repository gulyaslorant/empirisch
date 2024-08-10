import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { MatDividerModule } from "@angular/material/divider";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { VisitDialogComponent } from "../visit-dialog/visit-dialog.component"; // Importiere die Dialog-Komponente

@Component({
  selector: "app-textfeld",
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatPaginatorModule,
    MatDividerModule,
    MatDialogModule,
    VisitDialogComponent,
  ],
  templateUrl: "./textfeld.component.html",
  styleUrls: ["./textfeld.component.scss"],
})
export class TextfeldComponent {
  items = [
    { id: "burgenland-group", region: "Burgenland", capital: "Eisenstadt" },
    { id: "kaernten-group", region: "Kärnten", capital: "Klagenfurt" },
    {
      id: "niederoesterreich-group",
      region: "Niederösterreich",
      capital: "St. Pölten",
    },
    { id: "oberoesterreich-group", region: "Oberösterreich", capital: "Linz" },
    { id: "salzburg-group", region: "Salzburg", capital: "Salzburg" },
    { id: "steiermark-group", region: "Steiermark", capital: "Graz" },
    { id: "tirol-group", region: "Tirol", capital: "Innsbruck" },
    { id: "vorarlberg-group", region: "Vorarlberg", capital: "Bregenz" },
    { id: "wien-group", region: "Wien", capital: "Wien" },
  ];

  pagedItems = this.items.slice(0, 5);

  constructor(public dialog: MatDialog) {}

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedItems = this.items.slice(startIndex, endIndex);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VisitDialogComponent, {
      ariaLabelledBy: "dialog-title", // ARIA-Zugänglichkeit sicherstellen
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("Dialog geschlossen. Ergebnis:", result);
    });
  }
}
