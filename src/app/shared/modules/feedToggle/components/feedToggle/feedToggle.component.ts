import {Component, Input, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {select, Store} from '@ngrx/store'
import {isLoggedInSelector} from '../../../../../auth/store/selectors'

@Component({
  selector: 'app-feed-toggle',
  templateUrl: './feedToggle.component.html',
})
export class FeedToggleComponent implements OnInit {
  @Input('tagName') tagNameProps: string | null

  isLoggedIn$: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  private initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
