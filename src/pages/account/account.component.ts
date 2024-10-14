import { Component } from '@angular/core';
import classNames from '../../shared/constants/classNames';
import { accountConfig } from './account.config';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  classNames: any;
  accountConfig: any;
  constructor() {
    this.classNames = classNames;
    this.accountConfig = accountConfig;
  }
}
