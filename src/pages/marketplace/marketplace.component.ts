import { Component } from '@angular/core';
import classNames from '../../shared/constants/classNames';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CUSTOM_COMPONENTS } from '../../shared/components/components';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [CommonModule, RouterModule, CUSTOM_COMPONENTS],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.css',
})
export class MarketplaceComponent {
  classNames: any;
  products: any[] = new Array(10).fill(1);
  constructor() {
    this.classNames = classNames;
  }
}
