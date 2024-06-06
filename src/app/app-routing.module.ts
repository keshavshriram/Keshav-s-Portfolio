import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  // {
  //   path:'/',
  //   component : HomeComponent
  // },
  // {
  //   path : 'app-about-me',
  //   component : AboutMeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
