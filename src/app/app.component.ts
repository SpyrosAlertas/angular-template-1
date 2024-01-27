import { Component } from '@angular/core';

import { PageLayoutComponent } from './page-layout/page-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-template-1';
}
