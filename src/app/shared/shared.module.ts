import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { LikebuttonComponent } from './ui-kit/likebutton/likebutton.component';
import { TumbsUpComponent } from './ui-kit/tumbsUp/tumbsUp.component';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    SharedComponent,
    NavbarComponent,
    TumbsUpComponent,
    LikebuttonComponent,
  ],
  exports: [
    CommonModule,
    ToastrModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NavbarComponent,
    TumbsUpComponent,
    LikebuttonComponent,
  ],
})
export class SharedModule {}
