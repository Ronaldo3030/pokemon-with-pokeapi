async function getAllPokemons(url) {
  let reqPokemons = await fetch(url)
    .then(res => {
      return res.json();
    }).then(data => {
      return data;
    }).catch(err => {
      console.log("ERRO: " + err);
    });
  
  let objPokemons = await reqPokemons.results;
  
  let pokemons = [];
  for(let pokemon of await objPokemons){
    let urlPokemon = pokemon.url;
    let reqPoekmon = await getOnePokemon(urlPokemon)
    pokemons.push(reqPoekmon)
  }

  return pokemons
}
