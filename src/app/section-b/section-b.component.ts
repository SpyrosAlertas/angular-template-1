import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-b',
  standalone: true,
  imports: [NgFor],
  templateUrl: './section-b.component.html',
  styleUrl: './section-b.component.css'
})
export class SectionBComponent {

  cards: {
    src: string,
    alt: string,
    desc: string
  }[] = [
      {
        src: 'pic_trulli_1.jpg',
        alt: 'image placeholder #1',
        desc: 'Lorem ipsum dolor sit.'
      },
      {
        src: 'pic_trulli_2.jpg',
        alt: 'image placeholder #2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe?'
      },
      {
        src: 'pic_trulli_3.jpg',
        alt: 'image placeholder #3',
        desc: 'Lorem ipsum dolor sit amet consectetur.'
      }
    ];

}
