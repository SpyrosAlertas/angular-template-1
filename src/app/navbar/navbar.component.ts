import { NgFor, ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ThemeModel } from './theme-model';

import { CssSelectorService } from './css-selector.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, RouterLink, NgbModule, NgbDropdownModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed: boolean = true;
  themeOptions: ThemeModel[] = [
    { name: 'Simple B&W', filename: 'assets/stylesheets/theme-1.css' },
    { name: 'Green', filename: 'assets/stylesheets/theme-2.css' },
    { name: 'Brown', filename: 'assets/stylesheets/theme-3.css' },
    { name: 'Purple', filename: 'assets/stylesheets/theme-4.css' },
    { name: 'Blue', filename: 'assets/stylesheets/theme-5.css' }
  ];

  private isClickIn: boolean = false;

  constructor(private viewportScroller: ViewportScroller, private cssSelectorService: CssSelectorService) {
    this.viewportScroller.setOffset([0, 64]);
  }

  ngOnInit(): void {
    this.changeTheme(this.themeOptions[0]);
  }

  clickIn() {
    this.isClickIn = true;
  }

  scroll() {
    if (!this.isNavbarCollapsed) {
      this.viewportScroller.setOffset([0, 215]);
      this.isNavbarCollapsed = true;
    } else {
      this.viewportScroller.setOffset([0, 64]);
    }
  }

  changeTheme(theme: ThemeModel) {
    this.cssSelectorService.loadCssFile(theme.filename);
  }

  @HostListener('window:resize')
  private onResize() {
    this.isNavbarCollapsed = true;
  }

  @HostListener('document:click')
  private clickOut() {
    if (this.isClickIn) {
      this.isClickIn = false;
    } else {
      this.isNavbarCollapsed = true;
    }
  }

}
