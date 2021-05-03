import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticatService } from './authenticat.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthenticatService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.token;
    const newRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken),
    });
    return next.handle(newRequest);
  }
}
