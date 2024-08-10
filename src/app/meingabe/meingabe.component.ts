import { Component, OnInit } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-meingabe",
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatAutocompleteModule,
  ],
  templateUrl: "./meingabe.component.html",
  styleUrls: ["./meingabe.component.scss"],
})
export class MeingabeComponent implements OnInit {
  inputControl = new FormControl("");
  cardText: string = "";
  options: string[] = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Fig",
    "Grape",
    "Honeydew",
  ];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.inputControl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value || "")),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    // Hier wird beispielsweise nur nach Optionen gesucht, die mit dem eingegebenen Wert beginnen
    return this.options.filter((option) =>
      option.toLowerCase().startsWith(filterValue),
    );
  }

  updateCard() {
    this.cardText = this.inputControl.value ?? "";
  }
}
