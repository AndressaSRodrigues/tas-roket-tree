import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTreesComponent } from './components/display-trees/display-trees.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DisplayTreesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Árboles de Chile';
}
