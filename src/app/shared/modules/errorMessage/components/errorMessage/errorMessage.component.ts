import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-errorMessage',
  template: `<div>{{ messageProps }}</div>`,
})
export class ErrorMessageComponent {
  @Input('message') messageProps = 'Something went wrong'
}
