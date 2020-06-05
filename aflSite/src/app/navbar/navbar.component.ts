import { Component, OnInit, Input } from '@angular/core';
import { TeamDataService } from '../team-data.service';
import{Team} from "../team";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  teams: Team[];
  selectedTeam: Team;
  @Input() favTeamId:number; 

  constructor(private tDataService: TeamDataService) { }


  ngOnInit() {
    this.getSelectedTeam();
  }



  getSelectedTeam() : void{
    this.tDataService.getTeam().subscribe(temp => {
      this.teams = temp;
      console.log(temp);
    })
    console.log(this.tDataService);
  }


  onSelect(team: Team) : void{
    this.selectedTeam = team;
    
  }

  onFavTeamSet(teamId:number):void{
    console.log(teamId);
    this.favTeamId=teamId;
  
  }
}
