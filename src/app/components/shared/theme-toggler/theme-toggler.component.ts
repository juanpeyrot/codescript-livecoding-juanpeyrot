import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggler',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggler.component.html'
})
export class ThemeTogglerComponent {
  toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  }
}
