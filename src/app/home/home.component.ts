import { Component } from '@angular/core';

import { BrandComponent } from '../brand/brand.component';
import { SectionAComponent } from '../section-a/section-a.component';
import { SectionBComponent } from '../section-b/section-b.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BrandComponent, SectionAComponent, SectionBComponent, ContactDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
