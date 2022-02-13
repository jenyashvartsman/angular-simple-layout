import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly darkThemeClass = 'dark';
  private readonly darkThemeStorageKey = 'dark-theme';

  setCurrentTheme(): void {
    this.setDarkTheme(this.isDarkTheme())
  }

  toggleTheme(): void {
    this.setDarkTheme(!this.isDarkTheme())
  }

  isDarkTheme(): boolean {
    return window.localStorage.getItem(this.darkThemeStorageKey) === 'true';
  }

  setDarkTheme(darkTheme: boolean): void {
    if (darkTheme) {
      document.body.classList.add(this.darkThemeClass);
      window.localStorage.setItem(this.darkThemeStorageKey, 'true');
    } else {
      document.body.classList.remove(this.darkThemeClass);
      window.localStorage.setItem(this.darkThemeStorageKey, 'false');
    }
  }
}
