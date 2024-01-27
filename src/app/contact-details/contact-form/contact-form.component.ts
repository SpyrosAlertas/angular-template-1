import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faEnvelope, faExclamationTriangle, faLightbulb } from '@fortawesome/free-solid-svg-icons';

import { ContactService } from './contact.service';
import { MessageModel } from './message-model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NgbAlert, FaIconComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  faEnvelope: IconDefinition = faEnvelope;

  faExclamationTriangle: IconDefinition = faExclamationTriangle;
  faCheckCircle: IconDefinition = faCheckCircle;
  faLightbulb: IconDefinition = faLightbulb;

  messageStatus: string = '';

  contactForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required, Validators.minLength(4)] }),
    email: new FormControl('', { validators: [Validators.required, Validators.email] }),
    description: new FormControl('', { validators: [Validators.required, Validators.minLength(10)] }),
  });

  constructor(private contactService: ContactService) { }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get description() { return this.contactForm.get('description'); }

  onSubmit(): void {

    if (this.contactForm.invalid) {
      // In case form is invalid - this code should never be executed as button is disabled when form is invalid
      this.messageStatus = 'error';
      return;  // in case any form validation fails - do nothing
    }

    this.messageStatus = 'sending';

    let message: MessageModel = new MessageModel(
      this.contactForm.get('name')?.value || '',
      this.contactForm.get('email')?.value || '',
      this.contactForm.get('description')?.value || ''
    );

    this.contactService.sendMessage(message).subscribe({
      error: (e) => { this.messageStatus = 'error'; },
      complete: () => { this.messageStatus = 'success'; }
    });

  }

}
