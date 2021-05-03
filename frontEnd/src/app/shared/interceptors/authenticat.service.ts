import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatService {
  url = 'http://localhost:3000';
  isAuth$ = new BehaviorSubject<boolean>(false);
  token: string;
  userId: string;

  constructor(private router: Router, private http: HttpClient) {}

  createNewUser(user: User) {
    return new Promise<void>((resolve, reject) => {
      this.http.post(this.url + '/api/auth/signup', user).subscribe(
        () => {
          this.login(user.email, user.password)
            .then(() => {
              resolve();
            })
            .catch((error) => {
              reject(error);
            });
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  login(email: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      this.http
        .post(this.url + '/api/auth/login', {
          email: email,
          password: password,
        })
        .subscribe(
          (authData: { token: string; userId: string }) => {
            this.token = authData.token;
            this.userId = authData.userId;
            this.isAuth$.next(true);
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  logout() {
    this.isAuth$.next(false);
    this.userId = null;
    this.token = null;
  }
}
