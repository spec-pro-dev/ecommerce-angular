import { Component } from '@angular/core';
// Import constants
import classNames from '../../shared/constants/classNames';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CUSTOM_COMPONENTS } from '../../shared/components/components';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CUSTOM_COMPONENTS],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  classNames: any;
  products: any[] = [
    {
      _id: 1,
      title: 'The Great Gatsby - Hardcover Edition',
      description:
        'A classic novel by F. Scott Fitzgerald that explores themes of wealth, love, and the American Dream.',
      cover: 'https://example.com/covers/great-gatsby.jpg',
    },
    {
      _id: 2,
      title: 'Inception - Blu-ray',
      description:
        'A mind-bending thriller directed by Christopher Nolan, featuring stunning visuals and an intricate plot.',
      cover: 'https://example.com/covers/inception.jpg',
    },
    {
      _id: 3,
      title: 'Beethoven: Complete Symphonies - Box Set',
      description:
        "A comprehensive collection of Beethoven's symphonies performed by the Berlin Philharmonic.",
      cover: 'https://example.com/covers/beethoven-symphonies.jpg',
    },
    {
      _id: 4,
      title: 'Stranger Things - Season 1 DVD',
      description:
        'Join the adventure in Hawkins, Indiana, as a group of kids uncover supernatural mysteries.',
      cover: 'https://example.com/covers/stranger-things.jpg',
    },
    {
      _id: 5,
      title:
        'The Lord of the Rings: The Fellowship of the Ring - Extended Edition',
      description:
        'Experience the epic journey of Frodo and the Fellowship in this extended edition of the classic film.',
      cover: 'https://example.com/covers/lord-of-the-rings-fellowship.jpg',
    },
    {
      _id: 6,
      title: 'The Complete Works of William Shakespeare',
      description:
        "A comprehensive collection of all Shakespeare's plays, sonnets, and poems in a beautifully bound edition.",
      cover: 'https://example.com/covers/shakespeare-works.jpg',
    },
    {
      _id: 7,
      title: 'The Office - Complete Series DVD',
      description:
        'Enjoy all nine seasons of the beloved mockumentary-style sitcom about office life at Dunder Mifflin.',
      cover: 'https://example.com/covers/the-office.jpg',
    },
    {
      _id: 8,
      title: 'The Beatles: 1 - Vinyl Record',
      description:
        "A collection of The Beatles' greatest hits, remastered and pressed on high-quality vinyl.",
      cover: 'https://example.com/covers/the-beatles-1.jpg',
    },
    {
      _id: 9,
      title: "Harry Potter and the Sorcerer's Stone - Illustrated Edition",
      description:
        'The first book in the Harry Potter series, now beautifully illustrated for a new generation of readers.',
      cover: 'https://example.com/covers/harry-potter-sorcerers-stone.jpg',
    },
    {
      _id: 10,
      title: 'Game of Thrones - Season 1 Blu-ray',
      description:
        "The first season of the epic fantasy series based on George R.R. Martin's novels, featuring political intrigue and battles.",
      cover: 'https://example.com/covers/game-of-thrones-season1.jpg',
    },
    {
      _id: 11,
      title: 'The Alchemist - Paperback Edition',
      description:
        "A philosophical novel by Paulo Coelho about a shepherd's journey to discover his personal legend.",
      cover: 'https://example.com/covers/the-alchemist.jpg',
    },
  ];
  constructor() {
    this.classNames = classNames;
  }
}
