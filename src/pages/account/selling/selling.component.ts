import { Component } from '@angular/core';
import classNames from '../../../shared/constants/classNames';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CUSTOM_COMPONENTS } from '../../../shared/components/components';

@Component({
  selector: 'app-selling',
  standalone: true,
  imports: [RouterModule, CommonModule, CUSTOM_COMPONENTS],
  templateUrl: './selling.component.html',
  styleUrl: './selling.component.css',
})
export class SellingComponent {
  classNames: any;
  products: any[] = new Array(10).fill(1);
  constructor() {
    this.classNames = classNames;
  }
}
