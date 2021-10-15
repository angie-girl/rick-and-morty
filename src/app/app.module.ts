import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from "ngx-pagination";
import { NavbarComponent } from './_shared/navbar/navbar.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { MainComponent } from './_pages/main/main.component';
import { CharacterComponent } from './_pages/character/character.component';
import { LocationComponent } from './_pages/location/location.component';
import { EpisodeComponent } from './_pages/episode/episode.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    CharacterComponent,
    LocationComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
