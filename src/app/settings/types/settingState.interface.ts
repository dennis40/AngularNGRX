import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface'

export interface SettingStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
