import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

export interface Chip {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-mychips',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatRippleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mychips.component.html',
  styleUrls: ['./mychips.component.scss'],
})
export class MychipsComponent {
  chips: Chip[] = [
    { name: 'Kinderbeihilfe', selected: false },
    { name: 'Pendlerpauschale', selected: false },
    { name: 'Privatvorsorge', selected: false },
    { name: 'Unfallversicherung', selected: false },
  ];

  toggleSelection(chip: Chip): void {
    chip.selected = !chip.selected;
  }
}
