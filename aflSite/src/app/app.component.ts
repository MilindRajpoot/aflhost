import { Component, Input } from '@angular/core';
// import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'aflSite';
  favouriteTeam: number ;
  favTeamId:number=1;


   onAppFavset(teamid:number): void {
    //console.log(teamId);
    this.favTeamId = teamid;
  }
}

