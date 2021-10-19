import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './_pages/character/character-details/character-details.component';
import { CharacterComponent } from './_pages/character/character.component';
import { EpisodeComponent } from './_pages/episode/episode.component';
import { LocationComponent } from './_pages/location/location.component';
import { MainComponent } from './_pages/main/main.component';
import { EditFormComponent } from './_shared/edit-form/edit-form.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'character', component: CharacterComponent},
  {path: 'character/:id', component: CharacterDetailsComponent},
  {path: 'location', component: LocationComponent},
  {path: 'episode', component: EpisodeComponent},
  {path: 'edit', component: EditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
