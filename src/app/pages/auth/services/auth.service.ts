import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { OuterConstants } from '../../../consts/outer.constants';

import { User, Loginig } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<Loginig>;
  public currentUser: Observable<Loginig>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<Loginig>(
      //JSON.parse(localStorage.getItem('token') || '')
      {token:'token'}
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Loginig {
    return this.currentUserSubject.value;
  }

  user_login(item: any): Observable<any> {
    return this.http
      .post<any>(environment.apiURl + OuterConstants.USER_LOGIN, item)
      .pipe(
        map((Loginig) => {
          // login successful if there's a jwt token in the response
          if (Loginig && Loginig.token) {
            localStorage.setItem('token', JSON.stringify(Loginig));
            this.currentUserSubject.next(Loginig);
          }
          return Loginig;
        })
      );
  }


  public sign(): void {
    localStorage.setItem('token', 'token');
  }

  public signOut(): void {
    localStorage.removeItem('token');
  }

  public getUser(): Observable<User> {
    return of({
      name: 'John',
      lastName: 'Smith',
    });
  }
}
