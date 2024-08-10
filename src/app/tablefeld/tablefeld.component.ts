import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { DatepickerComponent } from "../datepicker/datepicker.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-tablefeld",
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, DatepickerComponent],
  templateUrl: "./tablefeld.component.html",
  styleUrls: ["./tablefeld.component.scss"],
})
export class TablefeldComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  private _sort: MatSort | null = null; // Lazy-loading Feld für MatSort

  @ViewChild(MatSort)
  set matSort(ms: MatSort) {
    this._sort = ms;
    this.dataSource.sort = this._sort;
  }

  ngOnInit() {
    // Keine Zuweisung notwendig, da sie im Setter passiert.
  }
}

const ELEMENT_DATA = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
];
