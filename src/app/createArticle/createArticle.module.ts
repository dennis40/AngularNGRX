import {NgModule} from '@angular/core'
import {CreateArticleComponent} from './components/createArticle/createArticle.component'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {RouterModule, Routes} from '@angular/router'
import {ErrorMessageModule} from '../shared/modules/errorMessage/errorMessage.module'
import {LoadingModule} from '../shared/modules/loading/loading.module'
import {CreateArticleService} from './services/createArticle.service'
import {CreateArticleEffect} from './store/effects/createArticle.effect'
import {ArticleFormModule} from '../shared/modules/articleForm/articleForm.module'

const routes: Routes = [
  {path: 'articles/new', component: CreateArticleComponent},
]

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
  ],
  declarations: [CreateArticleComponent],
  exports: [],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
