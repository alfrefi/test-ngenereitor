import {
  Inject,
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  Http,
  Headers
} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CursoService {
  static ENDPOINT: string = '/api/curso/:id';

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll():Observable<any> {
    return this._http
               .get(CursoService.ENDPOINT.replace(':id', ''))
               .map((r) => r.json());
  }

  add(message:string):Observable<any> {
    let _messageStringified = JSON.stringify({curso: message});

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
               .post(CursoService.ENDPOINT.replace(':id', ''), _messageStringified, {headers})
               .map((r) => r.json());
  }

  remove(id: string):Observable<any> {
    return this._http
               .delete(CursoService.ENDPOINT.replace(':id', id));
  }
}
