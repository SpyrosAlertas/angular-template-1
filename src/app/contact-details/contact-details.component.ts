import { Component } from '@angular/core';

import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [ContactInfoComponent, ContactFormComponent],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {

}
