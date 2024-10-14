import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { authService } from '../../../shared/services/authService';
import classNames from '../../../shared/constants/classNames';
import { CUSTOM_COMPONENTS } from '../../../shared/components/components';
import { Store } from '@ngrx/store';
import {
  hideLoading,
  showLoading,
} from '../../../shared/ngrx/actions/loading.action';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ...CUSTOM_COMPONENTS,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  show = false;
  classNames: any;
  showMessage: boolean = false;
  message: string = '';
  type: string = '';
  isSubmit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: authService,
    private router: Router,
    private store: Store
  ) {
    this.classNames = classNames;

    // Add Validator for LoginForm
    this.loginForm = this.fb.group({
      email: ['test@gmail.com', [Validators.required, Validators.email]],
      password: ['test123!@#', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      this.isSubmit = true;
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          console.log('Login successful', response);
          this.showMessage = true;
          this.message = 'Login Successful.';
          this.type = 'success';
          this.authService.setUser(response?.user);
          localStorage.setItem('token', response?.token);
          this.store.dispatch(showLoading());
          setTimeout(() => {
            this.store.dispatch(hideLoading());
            this.router.navigate(['/']);
          }, 2000);
          this.isSubmit = false;
        },
        (error) => {
          this.showMessage = true;
          this.message = 'Email or Password is incorrect.';
          this.type = 'error';
          console.error('Login failed', error);
          this.isSubmit = false;
        }
      );
    } else {
      this.loginForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
  }
  onClose() {
    this.showMessage = false;
  }
}
