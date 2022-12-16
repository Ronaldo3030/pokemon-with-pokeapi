function showFavoritesPokemon(){
  const objFavoritesPokemons = {...localStorage};
  // let favoritesPokemons = Object.keys(objFavoritesPokemons).map((key) => {
  //   return JSON.parse(objFavoritesPokemons[key]);
  // });

  Object.keys(objFavoritesPokemons).forEach(favoritePokemon => {
    console.log(favoritePokemon);
  })
}