async function showOnePokemon(name) {
  document.getElementById('container-pokemons').innerHTML = '';
  let reqPokemon = await getOnePokemon(`https://pokeapi.co/api/v2/pokemon/${name}`);

  let favoritesPokemonLocalStorage = getAllStorage();

  let idOfPokemon = reqPokemon.id;
  let nameOfPokemon = reqPokemon.name;
  let imgOfPokemon = reqPokemon.sprites.other["official-artwork"].front_default;
  let orderOfPokemon = reqPokemon.order;
  let typeOfPokemon = [];
  for (let type of reqPokemon.types) {
    typeOfPokemon.push(type.type.name.capitalize());
  }
  createCard("container-pokemons", imgOfPokemon, nameOfPokemon.capitalize(), orderOfPokemon, typeOfPokemon, favoritesPokemonLocalStorage, idOfPokemon);
  document.getElementById('search-result').classList.add('d-none');
  document.getElementById('search').value = '';
}