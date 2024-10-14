import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import classNames from '../../shared/constants/classNames';
import { profileConfig } from './profile.config';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  classNames: any;
  profileConfig: any;
  constructor() {
    this.classNames = classNames;
    this.profileConfig = profileConfig;
  }
}
