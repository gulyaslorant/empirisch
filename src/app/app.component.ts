import { Component, Type } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Der Empirische Teil';
  currentView: string = 'home'; // Standardansicht auf 'home' setzen

  // Lazy Loading von Komponenten, die tatsächlich benötigt werden
  loadToolbar: Promise<Type<any>> | null = null;
  loadSnackbar: Promise<Type<any>> | null = null;

  ngOnInit() {
    // Laden Sie die Toolbar nur, wenn sie benötigt wird
    this.loadToolbar = this.lazyLoadToolbar();
  }

  private lazyLoadToolbar(): Promise<Type<any>> {
    return import('./toolbar/toolbar.component').then(
      (m) => m.ToolbarComponent
    );
  }

  loadSnackbarComponent() {
    if (!this.loadSnackbar) {
      this.loadSnackbar = import('./snackbar/snackbar.component').then(
        (m) => m.SnackbarComponent
      );
    }
  }

  // Verwenden Sie diese Methode, um andere Komponenten nach Bedarf zu laden
  loadComponent(componentName: string) {
    switch (componentName) {
      case 'seitenleiste':
        return import('./seitenleiste/seitenleiste.component').then(
          (m) => m.SeitenleisteComponent
        );
      case 'selectfield':
        return import('./selectfield/selectfield.component').then(
          (m) => m.SelectfieldComponent
        );
      case 'checkbx':
        return import('./checkbx/checkbx.component').then(
          (m) => m.CheckboxComponent
        );
      case 'tabliste':
        return import('./tabliste/tabliste.component').then(
          (m) => m.TablisteComponent
        );
      default:
        return null;
    }
  }
}
