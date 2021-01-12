import {Component, OnInit} from '@angular/core'
import {ArticleInputInterface} from '../../../shared/types/articleInput.interface'
import {Observable} from 'rxjs'
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface'
import {select, Store} from '@ngrx/store'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {createArticleAction} from '../../store/actions/createArticle.actions'

@Component({
  selector: 'app-create-article',
  templateUrl: './createArticle.component.html',
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({articleInput}))
  }
}
