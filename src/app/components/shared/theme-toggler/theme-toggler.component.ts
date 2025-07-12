import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggler',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggler.component.html'
})
export class ThemeTogglerComponent {
  toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
    
    if (currentTheme === 'dark') {
      html.classList.remove('dark');
      html.setAttribute('data-theme', 'light');
    } else {
      html.classList.add('dark');
      html.setAttribute('data-theme', 'dark');
    }
  }
}
