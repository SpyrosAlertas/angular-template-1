import { DOCUMENT, NgFor, ViewportScroller } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ThemeModel } from './theme-model';

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

  constructor(private viewportScroller: ViewportScroller, @Inject(DOCUMENT) private document: Document) {
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
    const head = this.document.getElementsByTagName('head')[0];
    const style = this.document.createElement('link');
    style.id = 'client-theme';
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = theme.filename;
    head.appendChild(style);
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
