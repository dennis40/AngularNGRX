import {NgModule} from '@angular/core'
import {EditArticleComponent} from './components/editArticle/editArticle.component'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {RouterModule, Routes} from '@angular/router'
import {LoadingModule} from '../shared/modules/loading/loading.module'
import {EditArticleService} from './services/editArticle.service'
import {UpdateArticleEffect} from './store/effects/updateArticle.effect'
import {ArticleService as SharedArticleService} from '../shared/services/article.service'
import {GetArticleEffect} from './store/effects/getArticle.effect'
import {ArticleFormModule} from '../shared/modules/articleForm/articleForm.module'

const routes: Routes = [
  {path: 'articles/:slug/edit', component: EditArticleComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule,
    ArticleFormModule,
  ],
  declarations: [EditArticleComponent],
  exports: [],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
