import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'poke-menu',
    pathMatch: 'full'
  },
  {
    path: 'poke-menu',
    loadChildren: () => import('./pages/poke-menu/poke-menu.module').then( m => m.PokeMenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
