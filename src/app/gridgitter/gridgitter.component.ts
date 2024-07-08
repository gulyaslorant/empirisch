import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MeingabeComponent } from '../meingabe/meingabe.component';
import { CommonModule } from '@angular/common';
import { MychipsComponent } from '../mychips/mychips.component';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text?: string;
  component?: any;
}

@Component({
  selector: 'app-gridgitter',
  templateUrl: './gridgitter.component.html',
  styleUrls: ['./gridgitter.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MeingabeComponent,
    MychipsComponent,
  ],
  providers: [MeingabeComponent],
})
export class GridGitterComponent {
  tiles: Tile[];

  constructor() {
    this.tiles = [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.',
        cols: 3,
        rows: 3,
        color: 'lightblue',
      },
      { component: MeingabeComponent, cols: 2, rows: 4, color: 'lightgreen' },
      { text: 'Four', cols: 3, rows: 1, color: '#DDBDF1' },
      { component: MychipsComponent, cols: 5, rows: 1, color: 'lightgreen' },
    ];
  }
}
