import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

interface ISidebarNavItem {
  icon: string;
  label: string;
  link: string;
}

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent {

  readonly navItems: ISidebarNavItem[] = [
    {icon: 'home', label: 'Home', link: 'home'},
    {icon: 'info', label: 'About', link: 'about'},
    {icon: 'account_balance', label: 'Page 1', link: 'page-1'},
    {icon: 'analytics', label: 'Page 2', link: 'page-2'},
    {icon: 'leaderboard', label: 'Page 3', link: 'page-3'},
    {icon: 'support', label: 'Page 4', link: 'page-4'}
  ];

  sidebarOpen = false;

  constructor(private readonly themeService: ThemeService) {
  }

  toggleTheme(): void {
    this.themeService.toggleTheme()
  }
}
