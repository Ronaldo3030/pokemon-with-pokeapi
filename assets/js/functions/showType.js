async function showType(buttonType){
  let type = (buttonType.children[1].textContent).toLowerCase();

  document.getElementById('container-pokemons').innerHTML = '';
  $("#loader").css("display", "flex");
  $("#container-pokemons").css("display", "none");

  let reqPokemonsForType = await getRequest(`https://pokeapi.co/api/v2/type/${type}`);
  reqPokemonsForType.pokemon.forEach(async pokemon => {
    let reqPokemon = await getOnePokemon(pokemon.pokemon.url);
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
  });

  // DESACTIVE SCROLL GET POKEMON
  requestMade = true;

  $("#container-pokemons").css("display", "grid");
  $("#loader").css("display", "none");
}