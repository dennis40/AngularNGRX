import {Component, OnDestroy, OnInit} from '@angular/core'
import {ProfileInterface} from '../../shared/types/profile.interface'
import {combineLatest, Observable, Subscription} from 'rxjs'
import {select, Store} from '@ngrx/store'
import {getUserProfileAction} from '../store/actions/getUserProfile.action'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {
  errorSelector,
  isLoadingSelector,
  userProfileSelector,
} from '../store/selectors'
import {currentUserSelector} from '../../auth/store/selectors'
import {filter, map} from 'rxjs/operators'
import {CurrentUserInterface} from '../../shared/types/currentUser.interface'

@Component({
  selector: 'app-user-profile',
  templateUrl: 'userProfile.component.html',
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile: ProfileInterface
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  userProfileSubscription: Subscription
  slug: string
  apiUrl: string
  isCurrentUserProfile$: Observable<boolean>

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean)),
    ]).pipe(
      map(
        ([currentUser, userProfile]: [
          CurrentUserInterface,
          ProfileInterface
        ]) => {
          return currentUser.username === userProfile.username
        }
      )
    )
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile: ProfileInterface) => {
        this.userProfile = userProfile
      })
    this.route.params.subscribe((params: Params) => {
      this.slug = params.slug
      this.fetchUserProfile()
    })
  }

  fetchUserProfile(): void {
    this.store.dispatch(getUserProfileAction({slug: this.slug}))
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites')
    return isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe()
  }
}
