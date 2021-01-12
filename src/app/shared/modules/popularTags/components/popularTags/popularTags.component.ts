import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {getPopularTagsAction} from '../../store/actions/getPopularTags.actions'
import {Observable} from 'rxjs'
import {PopularTagType} from '../../../../types/popularTag.type'
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from '../../store/selectors'

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popularTags.component.html',
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>
  isLoading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  private initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  private fetchData(): void {
    this.store.dispatch(getPopularTagsAction())
  }
}
