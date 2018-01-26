
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {
  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http) { }

  search(term: string): Observable<Hero[]> {
    return this.http.get(`api/heroes/?name=${term}`)
      .map(response => response.json() as Hero[]);
  }
}
