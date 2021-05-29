import { LoginComponent } from './login/login.component';
import { OtherComponent } from './other/other.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MoviesComponent } from './movies/movies.component';
import { TechnologyComponent } from './technology/technology.component';
import { GameComponent } from './game/game.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'game',component:GameComponent},
  {path: 'tech',component:TechnologyComponent},
  {path: 'movie',component:MoviesComponent},
  {path: 'about',component:AboutUsComponent},
  {path: 'other',component:OtherComponent},
  {path: 'admin',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
