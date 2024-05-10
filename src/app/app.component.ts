import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnderConstructionComponent } from "./under-construction/under-construction.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UnderConstructionComponent]
})
export class AppComponent {
  title = 'paper-and-pixels-website';
}
