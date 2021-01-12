import {PopularTagType} from '../../../types/popularTag.type'

export interface PopularTagsStateInterface {
  data: PopularTagType[] | null
  error: string | null
  isLoading: boolean
}
