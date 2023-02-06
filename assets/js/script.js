const container = $("#container");
const containerPokemons = document.getElementById("container-pokemons");
const loading = document.getElementById("loading-pokemon");
// const inputSearch = document.getElementById("search");

function initPage(){
  document.getElementById('container-pokemons').innerHTML = '';
  
  // ACTIVE SCROLL GET POKEMON
  requestMade = false;

  $(document).ready(async () => showPokemons(0, 24));
}

initPage();

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.substr(1);
}