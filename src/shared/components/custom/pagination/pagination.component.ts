import { Component } from '@angular/core';
import classNames from '../../../constants/classNames';

@Component({
  selector: 'Pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  classNames: any;
  constructor() {
    this.classNames = classNames;
  }
}
