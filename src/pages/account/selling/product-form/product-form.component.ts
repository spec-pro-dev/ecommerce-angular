import { Component } from '@angular/core';
import classNames from '../../../../shared/constants/classNames';
import { CommonModule, Location } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  productForm: FormGroup;
  classNames: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private location: Location
  ) {
    this.classNames = classNames;
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(0)]],
      mediaUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
          ),
        ],
      ],
      category: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.productForm.valid) {
      console.log('Product Created', this.productForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  handleBack() {
    this.location.back();
  }

  get f() {
    return this.productForm.controls;
  }
}
