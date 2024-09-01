import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  currentView: string = 'expansion'; // Setze die Standardansicht auf "expansion"
  componentToLoad: any = null;

  constructor() {
    this.setView(this.currentView);
  }

  async setView(view: string) {
    this.currentView = view;

    // Laden der Komponenten basierend auf der Auswahl
    if (view === 'home') {
      const { SelectfieldComponent } = await import(
        '../selectfield/selectfield.component'
      );
      this.componentToLoad = SelectfieldComponent;
    } else if (view === 'expansion') {
      const { ExpansionComponent } = await import(
        '../expansion/expansion.component'
      );
      this.componentToLoad = ExpansionComponent;
    }
  }

  async preloadModules() {
    // Lade alle Module vorab
    await import('../selectfield/selectfield.component');
    await import('../expansion/expansion.component');
  }
}
