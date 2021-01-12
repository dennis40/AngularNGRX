import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {ArticleInputInterface} from '../../../../types/articleInput.interface'
import {BackendErrorsInterface} from '../../../../types/backendErrors.interface'
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-article-form',
  templateUrl: './articleForm.component.html',
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorsProps: BackendErrorsInterface | null

  @Output('articleSubmit')
  articleSubmitEvent = new EventEmitter<ArticleInputInterface>()

  form: FormGroup
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    const {title, description, body, tagList} = this.initialValuesProps
    this.form = this.fb.group({
      title,
      description,
      body,
      tagList: tagList.join(' '),
    })
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value)
  }
}
