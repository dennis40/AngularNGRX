import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {BackendErrorMessagesComponent} from './components/backendErrorMessages/backendErrorMessages.component'

@NgModule({
  declarations: [BackendErrorMessagesComponent],
  imports: [CommonModule],
  exports: [BackendErrorMessagesComponent],
})
export class BackendErrorMessagesModule {}
