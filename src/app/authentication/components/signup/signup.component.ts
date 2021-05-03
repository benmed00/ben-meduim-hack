import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted: boolean;
  registerFormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.maxLength(15),Validators.minLength(5)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.maxLength(25), Validators.minLength(6)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.maxLength(25), Validators.minLength(6)])
  }, {validators: this.checkPasswords});

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    return password === confirmPassword ? null : { notSame: true }
  }

  onRegister() {

    this.authService.register(this.registerFormGroup.get('username').value, this.registerFormGroup.get('email').value, this.registerFormGroup.get('password').value).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Your register has successfully added', 'Success !');
        this.router.navigateByUrl("/auth/login");
      },
      err => {
        console.error(err.error.message)
        this.toastr.warning('Error register, ' + err.error.message, 'Wrning !');
      }
    );
  }
}
