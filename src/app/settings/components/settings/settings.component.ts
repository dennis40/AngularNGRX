import {Component, OnDestroy, OnInit} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface'
import {Observable, Subscription} from 'rxjs'
import {currentUserSelector} from '../../../auth/store/selectors'
import {filter} from 'rxjs/operators'
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {updateCurrentUserAction} from '../../../auth/store/actions/updateCurrentUser.action'
import {CurrentUserInputInterface} from '../../../shared/types/currentUserInput.interface'
import {logoutAction} from '../../../auth/store/actions/sync.actions'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit, OnDestroy {
  currentUser: CurrentUserInterface
  currentUserSubscription: Subscription
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  private initializeListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser
        this.initializeForm()
      })
  }

  private initializeForm(): void {
    const {image, username, bio, email} = this.currentUser
    this.form = this.fb.group({
      image,
      username,
      bio,
      email,
      password: '',
    })
  }
  submit(): void {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value,
    }
    this.store.dispatch(updateCurrentUserAction({currentUserInput}))
  }
  logout(): void {
    this.store.dispatch(logoutAction())
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe()
  }
}
