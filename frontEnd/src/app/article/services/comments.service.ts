import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getCommentsByIdArticle(id: number){
    return this.http.get(`${environment.host}/comments?idArticle=${id}`)
  }
}
