import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-global-feed',
  templateUrl: './globalFeed.component.html',
  styleUrls: ['./globalFeed.component.scss'],
})
export class GlobalFeedComponent implements OnInit {
  apiUrl = '/articles'
  constructor() {}

  ngOnInit(): void {}
}
