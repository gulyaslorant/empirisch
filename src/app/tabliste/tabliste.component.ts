import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GridGitterComponent } from '../gridgitter/gridgitter.component';
import { FileTreeComponent } from '../file-tree/file-tree.component';

@Component({
  selector: 'app-tabliste',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    GridGitterComponent,
    FileTreeComponent,
    MatProgressBarModule,
  ],
  templateUrl: './tabliste.component.html',
  styleUrls: ['./tabliste.component.scss'],
})
export class TablisteComponent {
  progressValue = 0;

  onTabChange(index: number) {
    const tabCount = 3; // Anzahl der Tabs
    this.progressValue = (index / (tabCount - 1)) * 100;
  }
}
