import { Component } from '@angular/core';

import { ContactInfoComponent } from './contact-info/contact-info.component';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [ContactInfoComponent],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {

}
