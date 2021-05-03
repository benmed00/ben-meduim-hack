import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }

  getAllTag(): Observable<any>{
    return this.http.get(`${environment.host}tags`)
  }

  getTagById(id:number): Observable<any>{
    return this.http.get(`${environment.host}tags/${id}`)
  }


}
