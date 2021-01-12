import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {PopularTagType} from '../../../types/popularTag.type'
import {environment} from '../../../../../environments/environment'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
import {GetPopularTagsResponseInterfaceInterface} from '../types/getPopularTagsResponseInterface.interface'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}
  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags'
    return this.http.get(url).pipe(
      map((response: GetPopularTagsResponseInterfaceInterface) => {
        return response.tags
      })
    )
  }
}
