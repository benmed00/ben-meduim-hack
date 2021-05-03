import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Article } from '../../article/models/Article.model';
import { AppDataState, DataStateEnum } from '../../article/state/article.state';
import { ArticleService } from '../../article/services/article.service';

import { TagsService } from 'src/app/article/services/tags.service';
import { TokenStorageService } from 'src/app/authentication/services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles$: Observable<AppDataState<Article[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;
  currentArticle?: Article;
  newComment?: FormGroup;
  keywordToSearch: string = '';
  totaleShower = 4;
  totaleElements: number;
  tags: string[] = [];

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;

  username: string;
  constructor(
    private articleService: ArticleService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private tokenStorageService: TokenStorageService,
    private tagService: TagsService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.onGetTotalElement();
    this.onGetAllArticles();
    this.initializeCommentForm();
    this.onGetAllTags();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = this.tokenStorageService.getUser().username;
    }
  }

  onGetAllArticles(): void {
    this.articles$ = this.articleService.getAllArticles().pipe(
      map((data) => ({
        dataState: DataStateEnum.LOADED,
        data: data.slice(0, this.totaleShower),
      })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError((err) =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
      )
    );
  }

  onGetTotalElement(): void {
    this.articleService.getAllArticles().subscribe((data) => {
      console.log(data.length);
      this.totaleElements = data.length;
    });
  }

  onGetAllTags(): void {
    this.tagService.getAllTag().subscribe(
      (data) => {
        this.tags = data;
      },
      (error) => {
        console.error(error);
        this.toastr.warning('Error to get tags list', 'Warning');
      }
    );
  }

  onShowDetailsArticle(id: number): void {
    this.articleService.getArticleById(id).subscribe(
      (data) => {
        this.currentArticle = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addNewCommentToArticle(): void {
    this.currentArticle.comments.push(this.newComment.value);
    this.articleService.updateArticle(this.currentArticle).subscribe(
      (data) => {
        this.initializeCommentForm();
        this.toastr.success(
          'Your comment has successfully added to this article',
          'Success !'
        );
      },
      (err) => {
        console.log(err);
        this.toastr.warning(
          'Error to add your comment, try again',
          'Warning !'
        );
      }
    );
  }

  initializeCommentForm(): void {
    this.newComment = this.fb.group({
      id: [55],
      comment: [
        null,
        [
          Validators.required,
          Validators.maxLength(200),
          Validators.minLength(10),
        ],
      ],
      comment_date: [
        this.datePipe.transform(new Date(), 'dd-MM-yyyy hh:mm'),
        Validators.required,
      ],
      author: [
        this.tokenStorageService.getUser().username,
        Validators.required,
      ],
    });
  }

  onSearchArticleByKeyword(): void {
    this.articles$ = this.articleService
      .getArticlesByKeyword(this.keywordToSearch)
      .pipe(
        map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError((err) =>
          of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
        )
      );
  }

  addReactionToArticle(type: string): void {
    switch (type) {
      case 'loved':
        if (this.currentArticle.loved) this.currentArticle.loved_nomber--;
        else this.currentArticle.loved_nomber++;
        this.currentArticle.loved = !this.currentArticle.loved;
        break;
      case 'liked':
        if (this.currentArticle.liked) this.currentArticle.like_nomber--;
        else this.currentArticle.like_nomber++;
        this.currentArticle.liked = !this.currentArticle.liked;
        break;
      case 'reaction':
        if (this.currentArticle.reaction) this.currentArticle.reaction_nomber--;
        else this.currentArticle.reaction_nomber++;
        this.currentArticle.reaction = !this.currentArticle.reaction;
        break;
      default:
        break;
    }
    this.articleService.updateArticle(this.currentArticle).subscribe(
      (data) => {
        this.toastr.success(
          'Your interaction with this this article has been recorded',
          'Success !'
        );
      },
      (err) => {
        console.log(err);
        this.toastr.warning('Error, try again', 'Warning !');
      }
    );
  }

  onEditArticle(): void {
    this.router.navigateByUrl('/articles/edit/' + this.currentArticle.id);
  }

  onSearchArticleByTag(id: number): void {
    this.articles$ = this.articleService
      .getArticlesByKeyword(this.keywordToSearch)
      .pipe(
        map((data) => ({
          dataState: DataStateEnum.LOADED,
          data: data.filter((art) => art.tags.includes(id)),
        })),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError((err) =>
          of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
        )
      );
  }

  onDeleteArticle(): void {
    this.articleService.deleteArticle(this.currentArticle).subscribe(
      (data) => {
        this.toastr.success(
          'Your article has successfully deleted',
          'Success !'
        );
        this.currentArticle = null;
      },
      (err) => {
        console.error(err);
        this.toastr.warning(
          'Error to delete this article, try again',
          'Warning !'
        );
      }
    );
    this.onGetAllArticles();
  }

  showMore(): void {
    this.totaleShower = this.totaleShower + 4;
    this.onGetAllArticles();
  }
}
