import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from "ngx-pagination";

import { NavbarComponent } from './_shared/navbar/navbar.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { MainComponent } from './_pages/main/main.component';
import { CharacterComponent } from './_pages/character/character.component';
import { LocationComponent } from './_pages/location/location.component';
import { EpisodeComponent } from './_pages/episode/episode.component';
import { CharacterDetailsComponent } from './_pages/character/character-details/character-details.component';
import { LocationDetailsComponent } from './_pages/location/location-details/location-details.component';
import { EpisodeDetailsComponent } from './_pages/episode/episode-details/episode-details.component';
import { CharacterEditFormComponent } from './_pages/character/character-edit-form/character-edit-form.component';
import { EpisodeEditFormComponent } from './_pages/episode/episode-edit-form/episode-edit-form.component';
import { LocationEditFormComponent } from './_pages/location/location-edit-form/location-edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    CharacterComponent,
    LocationComponent,
    EpisodeComponent,
    CharacterDetailsComponent,
    LocationDetailsComponent,
    EpisodeDetailsComponent,
    CharacterEditFormComponent,
    EpisodeEditFormComponent,
    LocationEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
