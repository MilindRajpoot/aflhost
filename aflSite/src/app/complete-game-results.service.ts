import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Game} from './game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompleteGameResultsService {

  constructor(private http: HttpClient) { }

  getCompleteGameResult():Observable<Game[]>
  {
    return this.http.get<Game[]>('https://api.squiggle.com.au/?q=games;year=2019;complete=100').pipe(
      map((data: any) => data.games.map((item: any) => new Game(
        item.complete,
        item.is_grand_final,
        item.tz,
        item.hbehinds,
        item.ateam,
        item.winnerteamid,
        item.hgoals,
        item.updated,
        item.round,
        item.is_final,
        item.hscore,
        item.abehinds,
        item.winner,
        item.ascore,
        item.hteam,
        item.ateamid,
        item.venue,
        item.hteamid,
        item.agoals,
        item.year,
        item.date,
        item.id
      )))
    );;
}
}
