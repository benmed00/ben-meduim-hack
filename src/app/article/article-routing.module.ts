import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { NewArticleComponent } from './components/new-article/new-article.component';

const routes: Routes = [
  { path: 'articles/edit/:id', component: EditArticleComponent },
  { path: 'articles/new', component: NewArticleComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
