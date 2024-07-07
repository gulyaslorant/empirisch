import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meingabe',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTooltipModule,
  ],
  templateUrl: './meingabe.component.html',
  styleUrl: './meingabe.component.scss',
})
export class MeingabeComponent {
  inputControl = new FormControl('');
  cardText: string = '';

  updateCard() {
    this.cardText = this.inputControl.value ?? '';
  }
}
