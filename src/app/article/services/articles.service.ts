import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Article} from '../models/Article.model';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private apiUrl = environment.host+'article';

  constructor(private http: HttpClient, private datePipe: DatePipe) { }



}
