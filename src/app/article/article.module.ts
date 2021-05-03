import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleSingleComponent } from '../unauthenticated/article-single/article-single.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ArticleComponent,
    ArticleSingleComponent,
    EditArticleComponent,
  ],
})
export class ArticleModule {}
