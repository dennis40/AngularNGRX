import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PaginationComponent} from './components/pagination/pagination.component'
import {RouterModule} from '@angular/router'
import {UtilsService} from '../../services/utils.service'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [UtilsService],
})
export class PaginationModule {}
