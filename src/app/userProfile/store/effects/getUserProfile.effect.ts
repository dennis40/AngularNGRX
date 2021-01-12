import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, switchMap} from 'rxjs/operators'
import {of} from 'rxjs'
import {HttpErrorResponse} from '@angular/common/http'
import {UserProfileService} from '../../services/userProfile.service'
import {
  getUserProfileAction,
  getUserProfileActionFailureAction,
  getUserProfileActionSuccessAction,
} from '../actions/getUserProfile.action'
import {ProfileInterface} from '../../../shared/types/profile.interface'

@Injectable()
export class GetUserProfileEffect {
  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({slug}) => {
        return this.userProfileService.getUserProfile(slug).pipe(
          map((userProfile: ProfileInterface) => {
            return getUserProfileActionSuccessAction({userProfile})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getUserProfileActionFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private userProfileService: UserProfileService
  ) {}
}
