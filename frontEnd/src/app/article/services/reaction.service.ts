import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  constructor(private http: HttpClient) { }

  getReactionByIdArticleWithType(idArticle: number, type:string){
    return this.http.get(`${environment.host}/reactions?type=${type}&idArticle=${idArticle}`)
  }

  getReactionByIdArticleWithTypeUser(idArticle: number, type:string, idUser:number){
    return this.http.get(`${environment.host}/reactions?type=${type}&idArticle=${idArticle}&idArticle=${idUser}`)
  }
}
