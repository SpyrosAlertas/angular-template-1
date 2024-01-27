import { Component } from '@angular/core';

import { BrandComponent } from '../brand/brand.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BrandComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
