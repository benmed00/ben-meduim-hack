import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './unauthenticated/home/home.component';
import { ArticleSingleComponent } from './unauthenticated/article-single/article-single.component';

import { DatePipe } from '@angular/common';

import { ArticleModule } from './article/article.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';

import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { HacktohireComponent } from './unauthenticated/hacktohire/hacktohire.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleSingleComponent,
    HacktohireComponent,
  ],
  imports: [

    SharedModule,
    ArticleModule,
    AuthenticationModule,

    AppRoutingModule,

    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),

    BrowserModule.withServerTransition({ appId: 'serverApp' }),
  ],
  providers: [DatePipe, AuthInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
