import {Component, OnInit} from '@angular/core'
import {ArticleInputInterface} from '../../../shared/types/articleInput.interface'
import {Observable} from 'rxjs'
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface'
import {select, Store} from '@ngrx/store'
import {
  articleSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {ActivatedRoute} from '@angular/router'
import {getArticleAction} from '../../store/actions/getArticle.actions'
import {ArticleInterface} from '../../../shared/types/article.interface'
import {filter, map} from 'rxjs/operators'
import {updateArticleAction} from '../../store/actions/updateArticle.actions'

@Component({
  selector: 'app-edit-article',
  templateUrl: './editArticle.component.html',
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>
  isSubmitting$: Observable<boolean>
  isLoading$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>
  slug: string

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(updateArticleAction({slug: this.slug, articleInput}))
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        const {title, description, body, tagList} = article
        return {
          title,
          description,
          body,
          tagList,
        }
      })
    )
  }

  private fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }
}
