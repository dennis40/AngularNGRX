import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {GlobalFeedComponent} from './components/globalFeed/globalFeed.component'
import {RouterModule, Routes} from '@angular/router'
import {FeedModule} from '../shared/modules/feed/feed.module'
import {BannerModule} from '../shared/modules/banner/banner.module'
import {PopularTagsModule} from '../shared/modules/popularTags/popularTags.module'
import {FeedToggleModule} from '../shared/modules/feedToggle/feedToggle.module'

const routes: Routes = [{path: '', component: GlobalFeedComponent}]

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedToggleModule,
  ],
})
export class GlobalFeedModule {}
