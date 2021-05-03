import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthenticationComponent, SignupComponent, LoginComponent],
})
export class AuthenticationModule {}
