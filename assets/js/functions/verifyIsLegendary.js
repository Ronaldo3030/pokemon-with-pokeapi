async function verifyIsLegendary(name){
  let reqPokemon = await getRequest(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
  if(reqPokemon.is_legendary || reqPokemon.is_mythical){
    return true;
  }else{
    return false;
  }
}