const container = $("#container");
const containerPokemons = $("#container-pokemons");

$(document).ready(async () => {
  let pokemons = await getAllPokemons("https://pokeapi.co/api/v2/pokemon/?limit=15");
  console.log(pokemons);
});