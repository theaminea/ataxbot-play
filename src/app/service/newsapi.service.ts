import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(
    private http:HttpClient,
  ) {}
  apinewUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=27003a5a234e42f9a842b1871ccfae8c';

  topheading():Observable<any>
  {
    return this.http.get(this.apinewUrl);
  }
}
