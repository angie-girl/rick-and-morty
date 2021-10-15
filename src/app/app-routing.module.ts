import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './_pages/character/character.component';
import { EpisodeComponent } from './_pages/episode/episode.component';
import { LocationComponent } from './_pages/location/location.component';
import { MainComponent } from './_pages/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'character', component: CharacterComponent},
  {path: 'location', component: LocationComponent},
  {path: 'episode', component: EpisodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
