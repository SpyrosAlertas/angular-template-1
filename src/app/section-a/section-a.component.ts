import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-a',
  standalone: true,
  imports: [NgFor],
  templateUrl: './section-a.component.html',
  styleUrl: './section-a.component.css'
})
export class SectionAComponent {

  cards: {
    title: string,
    content: string
  }[] = [
      {
        title: 'Title 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, non.'
      },
      {
        title: 'Title 2',
        content: 'Lorem ipsum dolor sit amet consectetur.'
      },
      {
        title: 'Title 3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam sunt esse impedit ad neque!'
      },
      {
        title: 'Title 4',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ipsum incidunt. Itaque blanditiis esse doloribus accusantium voluptas quod, culpa sapiente.'
      },
      {
        title: 'Title 5',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam sunt esse impedit ad neque!'
      }
    ];

}
