import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { GridGitterComponent } from './gridgitter/gridgitter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridGitterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Der Empirische Teil';
}
