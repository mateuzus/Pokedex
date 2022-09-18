import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeMenuPage } from './poke-menu.page';

const routes: Routes = [
  {
    path: '',
    component: PokeMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeMenuPageRoutingModule {}
