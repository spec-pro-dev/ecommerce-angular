import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import classNames from '../../constants/classNames';
import { RouterModule } from '@angular/router';
import { accountConfig } from '../../../pages/account/account.config';
import { authService } from '../../services/authService';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  classNames: any;
  accountConfig: any;
  toggle: boolean = false;
  constructor(private authService: authService) {
    this.classNames = classNames;
    this.accountConfig = accountConfig;
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  handleBlur() {
    setTimeout(() => {
      this.toggle = false;
    }, 200);
  }
}
