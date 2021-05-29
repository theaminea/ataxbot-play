import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { NewsapiService } from '../app/service/newsapi.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './game/game.component';
import { TechnologyComponent } from './technology/technology.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OtherComponent } from './other/other.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    TechnologyComponent,
    MoviesComponent,
    AboutUsComponent,
    OtherComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    NewsapiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
