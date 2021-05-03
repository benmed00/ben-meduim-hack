import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewArticleComponent } from './article/components/new-article/new-article.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthenticationModule } from './authentication/authentication.module';
import { ArticleModule } from './article/article.module';

import { DatePipe } from '@angular/common';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './unauthenticated/home/home.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    NewArticleComponent,
  ],
  imports: [
    AuthenticationModule,
    ArticleModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
  ],
  providers: [DatePipe, AuthInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
