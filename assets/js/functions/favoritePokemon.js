function favoritePokemon(name, order) {
  let allStorage = getAllStorage();

  let pokemonName = treatName(name);
  let pokemon = {
    pokemonName,
    order,
  };

  const searchPokemonInLocalStorage = allStorage.some((storagePokemon) => storagePokemon.pokemonName == pokemon.pokemonName);

  if (!searchPokemonInLocalStorage) {
    localStorage.setItem(pokemonName, JSON.stringify(pokemon));
    return;
  }
  localStorage.removeItem(pokemonName);
}
