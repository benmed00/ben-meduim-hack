import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Article} from '../../models/Article.model';
import {DatePipe} from '@angular/common';
import {ArticleService} from '../../services/article.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {TagsService} from '../../services/tags.service';
import { TokenStorageService } from '../../../authentication/services/token-storage.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  article: Article;
  articleFormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.maxLength(200),Validators.minLength(10)]),
    description: new FormControl(null, [Validators.required, Validators.maxLength(1000), Validators.minLength(50)]),
    tags: new FormControl(null)
  });

  isLoggedIn = false;

  constructor(private datePipe: DatePipe,
              private articleService: ArticleService,
              private router: Router,
              private tagService: TagsService,
              private tokenStorageService: TokenStorageService,
              private  toastr: ToastrService) { }

  ngOnInit(): void {
    this.onGetAllTags();


    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (!this.isLoggedIn) {
      this.router.navigateByUrl("/auth/login");
    }

  }
  tags: string[] = [];
  onGetAllTags(){
    this.tagService.getAllTag().subscribe(
      data => {
        this.tags = data;
      }, error => {
        console.error(error);
        this.toastr.warning("Error to get tags list", "Warning")
      }
    )
  }

  onAddNewArticle() {
    this.articleService.addNewArticle(this.articleFormGroup.value).subscribe(
      data => {
        this.toastr.success('Article has successfully added', 'Success !');
      }, err => {
        console.log(err);
        this.toastr.warning('Error to add Article, try again', 'Warning !');
      }
    );
    this.router.navigateByUrl("/");
  }
}
