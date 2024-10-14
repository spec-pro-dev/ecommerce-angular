import { Component } from '@angular/core';
import classNames from '../../constants/classNames';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  date: any = new Date();
  classNames: any;
  constructor() {
    this.classNames = classNames;
  }
}
