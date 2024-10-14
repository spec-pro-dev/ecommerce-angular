import { Component } from '@angular/core';
import classNames from '../../../shared/constants/classNames';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CUSTOM_COMPONENTS } from '../../../shared/components/components';

@Component({
  selector: 'app-buying',
  standalone: true,
  imports: [CommonModule, RouterModule, CUSTOM_COMPONENTS],
  templateUrl: './buying.component.html',
  styleUrl: './buying.component.css',
})
export class BuyingComponent {
  classNames: any;
  products: any[] = new Array(10).fill(1);
  constructor() {
    this.classNames = classNames;
  }
}
