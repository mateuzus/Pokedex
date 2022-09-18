import { Component, OnInit, Output } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-poke-menu',
  templateUrl: './poke-menu.page.html',
  styleUrls: ['./poke-menu.page.scss'],
})
export class PokeMenuPage implements OnInit {

  pokemons: Array<any> = []

  isModalOpen: boolean = false

  @Output() selectedPokemon: object = {}

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.getPokemons()
  }

  async getPokemons() {
    this.pokemonsService.getPokemons().subscribe((item: any) => {
      this.pokemons = item.results
      let soma = 0
      this.pokemons = this.pokemons.map((item) => {
        soma += 1
        return {
          ...item,
          "image": `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${("000" + soma).slice(-3)}.png`
        }
      })
    })

  }

  getIdPokemon(id: any) {
    this.selectedPokemon = id
    this.setOpen(true)
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
