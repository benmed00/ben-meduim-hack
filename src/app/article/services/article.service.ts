import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../models/Article.model';
import {DatePipe} from '@angular/common';
import { TokenStorageService } from '../../authentication/services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = environment.host+'articles';

  constructor(private http: HttpClient, private datePipe: DatePipe, private tokenStorageService: TokenStorageService) { }

  getAllArticles():Observable<Article[]>{
    return this.http.get<Article[]>(this.apiUrl+'?_sort=id&_order=desc');
  }

  getArticleById(id:number):Observable<Article>{
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  getFirstArticle():Observable<Article>{
    return this.http.get<Article>(this.apiUrl+"?_limit=1");
  }

  updateArticle(article: Article):Observable<Article>{
    return this.http.put<Article>(this.apiUrl+`/${article.id}`, article);
  }

  getArticlesByKeyword(keyword: string):Observable<Article[]>{
    return this.http.get<Article[]>(this.apiUrl+`?title_like=${keyword}&_sort=id&_order=desc`);
  }

  getAllArticlesByTag(page: number):Observable<Article[]>{
    return this.http.get<Article[]>(this.apiUrl);
  }

  deleteArticle(article: Article):Observable<Article>{
    return this.http.delete(this.apiUrl+`/${article.id}`);
  }

  addNewArticle(article: Article):Observable<Article>{
    article.created_by = {"id": this.tokenStorageService.getUser().id, "username" : this.tokenStorageService.getUser().username};
    article.createdAt = this.datePipe.transform(new Date(), 'dd-MM-yyyy hh:mm');
    article.loved_nomber = 0;
    article.loved = false;
    article.like_nomber = 0;
    article.liked = false;
    article.reaction_nomber = 0;
    article.reaction = false;
    article.updated_date = "";
    article.comments = [];
    return this.http.post<Article>(this.apiUrl, article);
  }
}
