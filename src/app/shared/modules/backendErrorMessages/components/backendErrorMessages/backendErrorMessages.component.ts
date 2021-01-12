import {Component, Input, OnInit} from '@angular/core'
import {BackendErrorsInterface} from '../../../../types/backendErrors.interface'

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface
  errorMessages: string[]
  constructor() {}

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map((name) => {
      const messages = this.backendErrorsProps[name].join(', ')
      return `${name} ${messages}`
    })
  }
}
