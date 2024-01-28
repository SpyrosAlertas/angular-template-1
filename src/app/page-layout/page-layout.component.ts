import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, FooterComponent, RouterOutlet],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.css'
})
export class PageLayoutComponent {

}
