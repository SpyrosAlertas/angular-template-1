import { Component } from '@angular/core';

import { BrandComponent } from '../brand/brand.component';
import { SectionAComponent } from '../section-a/section-a.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BrandComponent, SectionAComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
