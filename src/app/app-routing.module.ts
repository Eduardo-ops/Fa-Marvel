import { ComicsComponent } from './comics/comics.component';
import { CharactersComponent } from './characters/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*  {
     path: '',
     redirectTo: '/characters',
     pathMatch: 'full'
   }, */
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'comics',
    component: ComicsComponent
  },
  {
    path: 'events',
    component: CharactersComponent
  },
  {
    path: 'series',
    component: CharactersComponent
  },
  {
    path: 'stories',
    component: CharactersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
