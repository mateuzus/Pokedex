import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-poke-modal',
  templateUrl: './poke-modal.component.html',
  styleUrls: ['./poke-modal.component.scss'],
})
export class PokeModalComponent implements OnInit {

  @Input() selectedPokemon: object = {}

  isOpen: boolean = false;

  namePokemon: string = ''
  imagePokemon: string = ''
  statAttr: string = ''
  statName: string = ''

  pokeHeight: number = 0
  pokeWeight: number = 0

  types: Array<any> = []
  abilities: Array<any> = []
  stats: Array<any> = []

  constructor(private pokemonService: PokemonsService, private toastController: ToastController) { }

  ngOnInit() {
    this.namePokemon = this.selectedPokemon['name']
    this.imagePokemon = this.selectedPokemon['image']
    this.loadAttributes()
  }

  loadAttributes() {
    let url = this.selectedPokemon['url']
    this.pokemonService.getAttributesPokemon(url).subscribe((item: any) => {
      console.log(item)
      this.types = item['types']
      this.abilities = item['abilities']
      this.pokeHeight = item.height
      this.pokeWeight = item.weight
      this.stats = item['stats']
      console.log(this.stats)
    })
  }

  async loadAbilitie(abilitie: any) {
    let url = abilitie.ability.url
    this.pokemonService.getAttributesPokemon(url).subscribe(async (item: any) => {
      let message = await item.effect_entries[0].effect
      this.presentToast(message)
    })
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  presentPopover(e: any) {
    this.statAttr = e.base_stat
    this.statName = e.stat.name
    this.isOpen = true
  }

}
