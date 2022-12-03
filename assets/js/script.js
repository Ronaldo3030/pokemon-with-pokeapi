const container = $("#container");
const containerPokemons = document.getElementById("container-pokemons");
const loading = document.getElementById("loading-pokemon");

$(document).ready(async () => showPokemons());

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.substr(1);
}