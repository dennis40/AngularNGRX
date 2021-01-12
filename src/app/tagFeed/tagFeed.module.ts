import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TagFeedComponent} from './components/tagFeed/tagFeed.component'
import {RouterModule, Routes} from '@angular/router'
import {FeedModule} from '../shared/modules/feed/feed.module'
import {BannerModule} from '../shared/modules/banner/banner.module'
import {PopularTagsModule} from '../shared/modules/popularTags/popularTags.module'
import {FeedToggleModule} from '../shared/modules/feedToggle/feedToggle.module'

const routes: Routes = [{path: 'tags/:slug', component: TagFeedComponent}]

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedToggleModule,
  ],
})
export class TagFeedModule {}
