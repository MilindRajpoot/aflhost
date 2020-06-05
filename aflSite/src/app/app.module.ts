import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { OddsComponent} from './odds/odds.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';
import { CompleteGameResultsService } from './complete-game-results.service';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeamStatsComponent,
    OddsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
