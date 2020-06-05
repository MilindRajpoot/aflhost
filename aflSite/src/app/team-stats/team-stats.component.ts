import { Component, OnInit, Input, ɵɵNgOnChangesFeature, SimpleChange, OnChanges } from '@angular/core';
import { CompleteGameResultsService } from '../complete-game-results.service';
import { HttpClient } from '@angular/common/http';
import { Game } from '../game';
import { element } from 'protractor';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css'],
  

})
export class TeamStatsComponent implements OnInit {

  games: Game[];
  win: number = 0;
  loss: number = 0;
  @Input() favouriteTeam: number =1;
  roundSelect: number=1;;


  constructor(private gameService: CompleteGameResultsService) {

  }

  ngOnInit(): void {
    this.getGames();

  }

  getGames(): void {

    this.gameService.getCompleteGameResult().subscribe(temp => {
    this.games = temp

      var tempArr = [];

      temp.forEach(element => {
        if (element.round == this.roundSelect) tempArr.push(element);

        // if (element.round > 19) tempArr.push(element.winner = "");
        // if (element.round == 24) tempArr.push(null);

      });

      this.games = tempArr;
      console.log(this.games);

    });

  }


  setRound(x): void {
    this.getGames();
    this.roundSelect = x;
    console.log("the selected value is " + x);
  }


}