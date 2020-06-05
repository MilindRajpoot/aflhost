import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Game} from './game';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor(private http: HttpClient) { }

  getGameData()
  {
    return this.http.get('https://api.squiggle.com.au/?q=games;year=2019');
  }
}
