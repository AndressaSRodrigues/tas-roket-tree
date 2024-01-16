import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    GoogleMapsModule
  ],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'Árboles de Chile';
}
