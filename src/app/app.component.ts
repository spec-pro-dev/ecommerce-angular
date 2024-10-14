import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { authService } from '../shared/services/authService';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsLoading } from '../shared/ngrx/selectors/loading.selectors';
import {
  hideLoading,
  showLoading,
} from '../shared/ngrx/actions/loading.action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'media-ecommerce';
  loading$: Observable<boolean> = new Observable();
  constructor(
    private router: Router,
    private authService: authService,
    private store: Store
  ) {
    this.loading$ = this.store.select(selectIsLoading);
  }
  initialize(): void {
    let token = localStorage.getItem('token');
    if (token) {
      this.store.dispatch(showLoading());
      this.authService.init().subscribe(
        (response) => {
          console.log(response);
          this.store.dispatch(hideLoading());
          this.authService.setUser(response?.user);
        },
        (error) => {
          console.log(error);
          this.store.dispatch(hideLoading());
          this.router.navigate(['/login']);
        }
      );
    }
  }
  ngOnInit(): void {
    // Initialize
    this.initialize();
  }
}
