const container = $("#container");
const containerPokemons = document.getElementById("container-pokemons");
const loading = document.getElementById("loading-pokemon");

$(document).ready(async () => {
  let pokemons = await getAllPokemons("https://pokeapi.co/api/v2/pokemon/?limit=15");
  loading.classList.add("d-none");
  containerPokemons.classList.remove("d-none");
  for(let pokemon of await pokemons){
    let name = pokemon.name;
    let img = pokemon.sprites.other["official-artwork"].front_default;
    getTypes(pokemon.types);

    createCard("container-pokemons", img, name.capitalize());
    console.log(pokemon);
    // createCard("container-pokemons", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", "Buba");
  }
});

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.substr(1);
}