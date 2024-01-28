import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgbModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  private isClickIn: boolean = false;

  isNavbarCollapsed: boolean = true;

  constructor(private viewportScroller: ViewportScroller) {
    this.viewportScroller.setOffset([0, 64]);
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
