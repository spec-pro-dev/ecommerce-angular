import { Component } from '@angular/core';
import classNames from '../../shared/constants/classNames';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})
export class MessageComponent {
  classNames: any;
  constructor() {
    this.classNames = classNames;
  }
}
