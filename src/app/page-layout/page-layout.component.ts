import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, FooterComponent],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.css'
})
export class PageLayoutComponent {

}
