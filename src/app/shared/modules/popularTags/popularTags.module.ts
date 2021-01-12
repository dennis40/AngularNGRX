import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PopularTagsService} from './services/popularTags.service'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {EffectsModule} from '@ngrx/effects'
import {GetPopularTagsEffect} from './store/effects/getPopularTags.effect'
import {PopularTagsComponent} from './components/popularTags/popularTags.component'
import {LoadingModule} from '../loading/loading.module'
import {ErrorMessageModule} from '../errorMessage/errorMessage.module'
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
    RouterModule,
  ],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
