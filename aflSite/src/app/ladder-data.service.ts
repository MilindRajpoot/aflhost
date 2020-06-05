import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class LadderDataService {

  constructor(private http: HttpClient) { }

  getLadderData()
  {
    return this.http.get('https://api.squiggle.com.au/?q=standings;year=2019;round=19');
  }
}
