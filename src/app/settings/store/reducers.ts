import {SettingStateInterface} from '../types/settingState.interface'
import {Action, createReducer, on} from '@ngrx/store'
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from '../../auth/store/actions/updateCurrentUser.action'

const initialState: SettingStateInterface = {
  isSubmitting: false,
  validationErrors: null,
}

const settingsReducers = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): SettingStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): SettingStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): SettingStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
)

export function reducers(state: SettingStateInterface, action: Action) {
  return settingsReducers(state, action)
}
