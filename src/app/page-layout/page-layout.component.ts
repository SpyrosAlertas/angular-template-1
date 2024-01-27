import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.css'
})
export class PageLayoutComponent {

}
