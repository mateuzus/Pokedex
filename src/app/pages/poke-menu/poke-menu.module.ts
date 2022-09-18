import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokeMenuPageRoutingModule } from './poke-menu-routing.module';

import { PokeMenuPage } from './poke-menu.page';
import { PokeModalComponent } from 'src/app/components/poke-modal/poke-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokeMenuPageRoutingModule
  ],
  declarations: [PokeMenuPage, PokeModalComponent]
})
export class PokeMenuPageModule {}
