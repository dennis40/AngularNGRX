import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import {ArticleInputInterface} from '../../shared/types/articleInput.interface'
import {map} from 'rxjs/operators'
import {SaveArticleResponseInterface} from '../../shared/types/saveArticleResponse.interface'

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticleInputInterface> {
    const fullUrl = `${environment.apiUrl}/articles`
    return this.http
      .post<SaveArticleResponseInterface>(fullUrl, articleInput)
      .pipe(map((response: SaveArticleResponseInterface) => response.article))
  }
}
