import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  roles: string[] = [];
  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.maxLength(15),Validators.minLength(1)]),
    password: new FormControl(null, [Validators.required, Validators.maxLength(25), Validators.minLength(6)])
  });

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onLogin() {
    this.authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/']);
      },
      err => {
        console.error(err.error.message)
        this.toastr.warning('Error to login, ' + err.error.message, 'Wrning !');
      }
    );
  }
}
