import { Component } from '@angular/core';
import classNames from '../../../shared/constants/classNames';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { authService } from '../../../shared/services/authService';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_COMPONENTS } from '../../../shared/components/components';
import { Store } from '@ngrx/store';
import {
  hideLoading,
  showLoading,
} from '../../../shared/ngrx/actions/loading.action';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...CUSTOM_COMPONENTS,
  ],
  providers: [HttpClient],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: any; // initlize the variable for register form.
  show: boolean = false;
  classNames: any;
  isSubmit: boolean = false;
  showMessage: boolean = false;
  type: string = '';
  message: string = '';
  constructor(
    private fb: FormBuilder,
    private authService: authService,
    private router: Router,
    private store: Store
  ) {
    this.classNames = classNames;
    this.registerForm = this.fb.group({
      name: ['John Doe', [Validators.required, Validators.minLength(3)]],
      email: ['test@gmail.com', [Validators.required, Validators.email]],
      password: ['test123!@#', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit(): void {
    if (this.registerForm.valid) {
      this.isSubmit = true;
      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          this.showMessage = true;
          this.type = 'success';
          this.message = 'Register successful';
          console.log('Register successful', response);
          this.store.dispatch(showLoading());
          setTimeout(() => {
            this.store.dispatch(hideLoading());
            this.router.navigate(['/login']);
          }, 2000);
          this.isSubmit = false;
        },
        (error) => {
          this.type = 'error';
          this.showMessage = true;
          this.message = error.error.message;
          if (error?.error?.error?.code == 11000) {
            this.message = 'Duplicated User';
          }
          console.error('Register failed', error);
          this.isSubmit = false;
        }
      );
    } else {
      this.registerForm.markAllAsTouched(); // Mark all fields as touched to show validation errors
    }
  }
  onClose() {
    this.showMessage = false;
  }
}
