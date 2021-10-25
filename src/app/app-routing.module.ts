import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './_pages/character/character-details/character-details.component';
import { CharacterEditFormComponent } from './_pages/character/character-edit-form/character-edit-form.component';
import { CharacterComponent } from './_pages/character/character.component';
import { EpisodeDetailsComponent } from './_pages/episode/episode-details/episode-details.component';
import { EpisodeEditFormComponent } from './_pages/episode/episode-edit-form/episode-edit-form.component';
import { EpisodeComponent } from './_pages/episode/episode.component';
import { LocationDetailsComponent } from './_pages/location/location-details/location-details.component';
import { LocationEditFormComponent } from './_pages/location/location-edit-form/location-edit-form.component';
import { LocationComponent } from './_pages/location/location.component';
import { MainComponent } from './_pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'character/:id', component: CharacterDetailsComponent },
  { path: 'character/:id/edit', component: CharacterEditFormComponent },
  { path: 'location', component: LocationComponent },
  { path: 'location/:id', component: LocationDetailsComponent },
  { path: 'location/:id/edit', component: LocationEditFormComponent },
  { path: 'episode', component: EpisodeComponent },
  { path: 'episode/:id', component: EpisodeDetailsComponent },
  { path: 'episode/:id/edit', component: EpisodeEditFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
