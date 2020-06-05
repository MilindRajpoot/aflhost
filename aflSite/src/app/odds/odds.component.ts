import { Component, OnInit } from '@angular/core';
import { Tips } from '../tips'
import { TipDataService } from '../tip-data.service'

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.css']
})
export class OddsComponent implements OnInit {

  tips: Tips[];
  roundSelect: number = 1;
  sourceSelect: string = "Squiggle";
  constructor(private tipsService: TipDataService) { }

  ngOnInit(): void {
    this.getTips();
    console.log(this.tips);
    console.log("is this working?");
  }


  getTips(): void {
    this.tipsService.getTipData().subscribe(temp => {
    this.tips = temp

      var tempArr = [];


      temp.forEach(element => {
        if (element.source == this.sourceSelect && element.round == this.roundSelect) tempArr.push(element);


      });


      this.tips = tempArr;

    });
  }


  setRound(x): void {
    console.log("the selected value is " + x);
    this.roundSelect = x;
    this.getTips();
    console.log(this.roundSelect);
  }

  setSource(x): void {
    console.log("the selected value is " + x);
    this.sourceSelect = x;
    this.getTips();
    console.log(this.sourceSelect);
  }

}