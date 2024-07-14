import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GridGitterComponent } from '../gridgitter/gridgitter.component';
import { FileTreeComponent } from '../file-tree/file-tree.component';
import { Observable, Observer } from 'rxjs';

interface ExampleTab {
  label: string;
  content: string;
}

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
  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'Gridliste', content: 'Gridliste Content' },
          {
            label: 'Angular Dateistruktur',
            content: 'Angular Dateistruktur Content',
          },
          { label: 'Tab 3', content: 'Tab 3 Content' },
        ]);
      }, 1000);
    });
  }

  onTabChange(index: number) {
    const tabCount = 3; // Anzahl der Tabs
    this.progressValue = (index / (tabCount - 1)) * 100;
  }
}
