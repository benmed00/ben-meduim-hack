import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Article } from '../../article/models/Article.model';

@Component({
  selector: 'app-article-single',
  templateUrl: './article-single.component.html',
  styleUrls: ['./article-single.component.css'],
})

export class ArticleSingleComponent{

  @Input() article: Article;

  @Output() articleToShow = new EventEmitter<number>();

  articleSelectedId: number;

  onShowArticle(id: number): void {
    this.articleToShow.emit(id);
    this.articleSelectedId = id;
  }
}
