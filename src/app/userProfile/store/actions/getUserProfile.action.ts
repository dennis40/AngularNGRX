import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'
import {ProfileInterface} from '../../../shared/types/profile.interface'

export const getUserProfileAction = createAction(
  ActionTypes.GET_USER_PROFILE,
  props<{slug: string}>()
)

export const getUserProfileActionSuccessAction = createAction(
  ActionTypes.GET_USER_PROFILE_SUCCESS,
  props<{userProfile: ProfileInterface}>()
)

export const getUserProfileActionFailureAction = createAction(
  ActionTypes.GET_USER_PROFILE_FAILURE
)
