import {NgModule} from '@angular/core'
import {ArticleComponent} from './components/article/article.component'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {GetArticleEffect} from './store/effects/getArticle.effect'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {ArticleService as SharedArticleService} from '../../services/article.service'
import {RouterModule, Routes} from '@angular/router'
import {ErrorMessageModule} from '../errorMessage/errorMessage.module'
import {LoadingModule} from '../loading/loading.module'
import {TagListModule} from '../tagList/tagList.module'
import {ArticleService} from './services/article.service'
import {DeleteArticleEffect} from './store/effects/deleteArticle.effect'

const routes: Routes = [{path: 'articles/:slug', component: ArticleComponent}]

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
    TagListModule,
  ],
  declarations: [ArticleComponent],
  exports: [],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
