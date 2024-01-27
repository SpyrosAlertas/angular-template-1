import { Component } from '@angular/core';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {

  faMapPin: IconDefinition = faMapPin;
  faPhone: IconDefinition = faPhone;

}
