import {CreateArticleStateInterface} from '../types/createArticleState.interface'
import {Action, createReducer, on} from '@ngrx/store'

import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from './actions/createArticle.actions'
import {routerNavigationAction} from '@ngrx/router-store'
import {ArticleStateInterface} from '../../shared/modules/article/types/articleState.interface'

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
}

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    createArticleSuccessAction,
    (state, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    createArticleFailureAction,
    (state, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(routerNavigationAction, (): CreateArticleStateInterface => initialState)
)

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action)
}
