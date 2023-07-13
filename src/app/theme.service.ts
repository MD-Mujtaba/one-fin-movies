import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkTheme = false;

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
