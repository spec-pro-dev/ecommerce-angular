import { Component } from '@angular/core';
import classNames from '../../../shared/constants/classNames';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
})
export class ForgetPasswordComponent {
  classNames: any;
  constructor() {
    this.classNames = classNames;
  }
}
