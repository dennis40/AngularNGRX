import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {YourFeedComponent} from './components/yourFeed/yourFeed.component'
import {RouterModule, Routes} from '@angular/router'
import {FeedModule} from '../shared/modules/feed/feed.module'
import {BannerModule} from '../shared/modules/banner/banner.module'
import {PopularTagsModule} from '../shared/modules/popularTags/popularTags.module'
import {FeedToggleModule} from '../shared/modules/feedToggle/feedToggle.module'

const routes: Routes = [{path: 'feed', component: YourFeedComponent}]

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedToggleModule,
  ],
})
export class YourFeedModule {}
