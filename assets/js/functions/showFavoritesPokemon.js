function showFavoritesPokemon(){
  const objFavoritesPokemons = {...localStorage};
  document.getElementById('container-pokemons').innerHTML = '';
  Object.keys(objFavoritesPokemons).forEach(async favoritePokemon => {
    let reqFavoritePokemon = await getOnePokemon(`https://pokeapi.co/api/v2/pokemon/${favoritePokemon}`);

    let favoritesPokemonLocalStorage = getAllStorage();

    let idOfPokemon = reqFavoritePokemon.id;
    let nameOfPokemon = reqFavoritePokemon.name;
    let imgOfPokemon = reqFavoritePokemon.sprites.other["official-artwork"].front_default;
    let orderOfPokemon = reqFavoritePokemon.order;
    let typeOfPokemon = [];
    for (let type of reqFavoritePokemon.types) {
      typeOfPokemon.push(type.type.name.capitalize());
    }
    createCard("container-pokemons", imgOfPokemon, nameOfPokemon.capitalize(), orderOfPokemon, typeOfPokemon, favoritesPokemonLocalStorage, idOfPokemon);
  })
}