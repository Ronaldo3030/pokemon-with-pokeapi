const container = $("#container");
const containerPokemons = document.getElementById("container-pokemons");
const loading = document.getElementById("loading-pokemon");
// const inputSearch = document.getElementById("search");

$(document).ready(async () => showPokemons(0, 24));

// SEARCH POKEMON
// inputSearch.addEventListener('input', async () => {
//   let valueInput = inputSearch.value
//   if (valueInput) {
//     fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6000")
//       .then(function (response) {
//         return response.json()
//       }).then(function (data) {
//         console.log(data);
//       }).catch(function (err) {
//         console.log(err)
//       })
//     console.log(pokemons);
//   }
// });

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.substr(1);
}