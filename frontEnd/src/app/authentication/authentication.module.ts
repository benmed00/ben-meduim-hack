import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [SharedModule, AuthenticationRoutingModule, BrowserModule],
  declarations: [AuthenticationComponent, SignupComponent, LoginComponent],
})
export class AuthenticationModule {}
