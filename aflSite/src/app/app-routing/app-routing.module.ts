import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

// const routes: Routes = [
//   { path: 'hero', component: HeroSectionComponent }
// ];

@NgModule({
  imports: [
    //RouterModule.forRoot(routes)
  ],
  exports: [RouterModule,
    CommonModule
  ]
})
export class AppRoutingModule { }