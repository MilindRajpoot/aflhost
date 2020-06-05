import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Team } from './team';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamDataService {

  // constructor(private http: HttpClient) { }

  constructor(private http: HttpClient) {
  }

  getTeam():Observable<Team[]> {
    return this.http.get<Team[]>("https://api.squiggle.com.au/?q=teams").pipe(map((data: any) => data.teams.map((item: any) => new Team(
      item.logo,
      item.abbrev,
      item.name,
      item.id
    ))));
  }
}
