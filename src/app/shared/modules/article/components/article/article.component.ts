import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {getArticleAction} from '../../store/actions/getArticle.actions'
import {ActivatedRoute} from '@angular/router'
import {ArticleInterface} from '../../../../types/article.interface'
import {combineLatest, Observable, Subscription} from 'rxjs'
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors'
import {currentUserSelector} from '../../../../../auth/store/selectors'
import {map} from 'rxjs/operators'
import {CurrentUserInterface} from '../../../../types/currentUser.interface'
import {deleteArticleAction} from '../../store/actions/deleteArticle.actions'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string
  article: ArticleInterface | null
  articleSubscription: Subscription
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  isAuthor$: Observable<boolean>

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  private fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector)),
    ]).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface
        ]) => {
          if (!article || !currentUser) {
            return false
          }
          return article.author.username === currentUser.username
        }
      )
    )
  }

  private initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article
      })
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({slug: this.slug}))
  }
}
