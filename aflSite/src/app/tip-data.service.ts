import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Tips} from './tips';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipDataService {

  constructor(private http: HttpClient){}

  getTipData():Observable<Tips[]>
  {
    return this.http.get<Tips[]>('https://api.squiggle.com.au/?q=tips;year=2019').pipe(
    map((data: any) => data.tips.map((item: any) => new Tips(
      item.ateamid,
      item.source,
      item.hteam,
      item.err,
      item.correct,
      item.tipteamid,
      item.round,
      item.venue,
      item.sourceid,
      item.hteamid,
      item.tip,
      item.year,
      item.gameid,
      item.confidence,
      item.bits,
      item.updated,
      item.date,
      item.margin,
      item.hconfidence,
      item.ateam
    )))
  );;
  }
}

