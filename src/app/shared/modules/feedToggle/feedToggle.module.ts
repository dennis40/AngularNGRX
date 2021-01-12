import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FeedToggleComponent} from './components/feedToggle/feedToggle.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeedToggleComponent],
  exports: [FeedToggleComponent],
})
export class FeedToggleModule {}
