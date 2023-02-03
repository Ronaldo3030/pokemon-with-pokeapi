async function searchPokemon(val){
  if(val){
    document.getElementById('search-result').innerHTML = '';
    document.getElementById('search-result').classList.remove('d-none');
    let reqAllPokemons = await getRequest('https://pokeapi.co/api/v2/pokemon/?limit=1000000000');
    reqAllPokemons.results.forEach(pokemon => {
      if(pokemon.name.startsWith((val).toLowerCase())){
        let liResult = document.createElement("li");
        liResult.classList.add("list-group-item");
        liResult.addEventListener("click", () => {
          showOnePokemon(pokemon.name);
        });
        let textNamePokemon = document.createTextNode(firstUpper(pokemon.name));
        liResult.appendChild(textNamePokemon);
        document.getElementById('search-result').appendChild(liResult);
      }
    });
  }else{
    document.getElementById('search-result').classList.add('d-none');
  }
}