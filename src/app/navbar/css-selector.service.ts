import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CssSelectorService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  loadCssFile(cssFile: string) {
    const head = this.document.getElementsByTagName('head')[0];
    const style = this.document.createElement('link');
    style.id = 'client-theme';
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = cssFile;
    head.appendChild(style);
  }

}
