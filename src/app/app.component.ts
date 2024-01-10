import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponentComponent],
  template: `<router-outlet></router-outlet>
  <h1>Curso Angular</h1>
  <div class="theme-dark">
    <app-new-component/>
  </div>
  <app-new-component/>
  `,
})
export class AppComponent {
  title = 'aulas-angular17';
}
