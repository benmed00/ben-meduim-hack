import { NgModule } from '@angular/core';

import { ArticleComponent } from './article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';

import { NewArticleComponent } from './components/new-article/new-article.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  imports: [SharedModule, ArticleRoutingModule],
  declarations: [ArticleComponent, EditArticleComponent, NewArticleComponent],
})
export class ArticleModule {}
