import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import {ArticleInputInterface} from '../../shared/types/articleInput.interface'
import {map} from 'rxjs/operators'
import {SaveArticleResponseInterface} from '../../shared/types/saveArticleResponse.interface'

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(
    slug: string,
    articleInput: ArticleInputInterface
  ): Observable<ArticleInputInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`
    return this.http
      .put<SaveArticleResponseInterface>(fullUrl, articleInput)
      .pipe(map((response: SaveArticleResponseInterface) => response.article))
  }
}
