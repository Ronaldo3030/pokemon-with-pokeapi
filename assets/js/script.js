const container = $("#container");
const containerPokemons = document.getElementById("container-pokemons");

$(document).ready(async () => {
  let pokemons = await getAllPokemons("https://pokeapi.co/api/v2/pokemon/?limit=15");
  containerPokemons.innerHTML = "";
  for(let pokemon of await pokemons){
    let name = pokemon.name;
    let img = pokemon.sprites.other["official-artwork"].front_default;
    createCard("container-pokemons", img, name.capitalize());
    console.log(pokemon);
    // createCard("container-pokemons", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", "Buba");
  }
});

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.substr(1);
}