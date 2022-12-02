const container = $("#container");
const containerPokemons = document.getElementById("container-pokemons");
const loading = document.getElementById("loading-pokemon");

$(document).ready(async () => {
  let pokemons = await getAllPokemons("https://pokeapi.co/api/v2/pokemon/?limit=24");
  loading.classList.add("d-none");
  containerPokemons.classList.remove("d-none");

  let favoritesPokemonLocalStorage = getAllStorage();

  for(let pokemon of await pokemons){
    let nameOfPokemon = pokemon.name;
    let imgOfPokemon = pokemon.sprites.other["official-artwork"].front_default;
    let orderOfPokemon = pokemon.order;
    let typeOfPokemon = [];
    for(let type of pokemon.types){
      typeOfPokemon.push(type.type.name.capitalize());
    }
    createCard("container-pokemons", imgOfPokemon, nameOfPokemon.capitalize(), orderOfPokemon, typeOfPokemon, favoritesPokemonLocalStorage);
  }
});

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.substr(1);
}