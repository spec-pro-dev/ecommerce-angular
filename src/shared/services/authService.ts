import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class authService {
  private apiUrl = environment.apiUrl;
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  ); // Initial value is null
  public currentUser: Observable<any> = this.currentUserSubject.asObservable(); // Expose as Observable
  constructor(private http: HttpClient) {}

  init(): Observable<any> {
    return this.http.get(`${this.apiUrl}/init`);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  logout(): void {
    // Remove token and user data
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  setUser(user: any): void {
    this.currentUserSubject.next(user);
  }

  // Optional: Method to get user data
  getUser(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }
}
