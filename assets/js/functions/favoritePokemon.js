function favoritePokemon(name, order){
  let pokemonName = treatName(name);
  let pokemon = {
    pokemonName,
    order
  }

  localStorage.setItem(pokemonName, JSON.stringify(pokemon));
}