import { Component, HostListener } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isNavbarCollapsed: boolean = true;
  private isClickIn: boolean = false;

  @HostListener('window:resize')
  onResize() {
    this.isNavbarCollapsed = true;
  }

  @HostListener('document:click')
  clickOut() {
    if (this.isClickIn) {
      this.isClickIn = false;
    } else {
      this.isNavbarCollapsed = true;
    }
  }

  clickIn() {
    this.isClickIn = true;
  }

}
