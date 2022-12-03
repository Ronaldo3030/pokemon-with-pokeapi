function createCard(idDiv, img, name, order, typeOfPokemon, starPokemons) {
  let divRoot = document.getElementById(idDiv);

  let cardPokemon = document.createElement("div");
  cardPokemon.id = treatName(name);
  cardPokemon.classList.add("card-pokemon");
  let colorCard = changeColorAccordingToType(typeOfPokemon[0].toLowerCase());
  cardPokemon.setAttribute("style", `background-color:${colorCard}`);

  let infoPokemon = document.createElement("div");
  infoPokemon.classList.add("info-pokemon");

  let containerImage = document.createElement("div");
  containerImage.classList.add("container-image");

  let buttonFav = document.createElement("div");
  buttonFav.addEventListener("click", () => {
    favoritePokemon(name, order);
    icon.classList.toggle("yellow");
  });
  buttonFav.classList.add("star");
  buttonFav.classList.add("button-fav");

  let icon = document.createElement("i");
  icon.classList.add("fa-star");
  icon.classList.add("fas");

  starPokemons.forEach((pokemon) => {
    let starPokemonName = pokemon.pokemonName;
    if (name.toLowerCase() == starPokemonName) {
      icon.classList.add("yellow");
    }
  });

  let imgPokemon = document.createElement("img");
  imgPokemon.classList.add("img-pokemon");
  imgPokemon.setAttribute("src", img);

  let textNamePokemon = document.createTextNode(name);
  let namePokemon = document.createElement("p");
  namePokemon.classList.add("name-pokemon");
  namePokemon.appendChild(textNamePokemon);

  let ul = document.createElement("ul");
  ul.classList.add("type-list");

  for (let type of typeOfPokemon) {
    let li = document.createElement("li");
    let typeName = document.createTextNode(type);
    li.appendChild(typeName);
    li.classList.add("badge-type");
    li.setAttribute(
      "style",
      `background-color:${changeColorAccordingToType(type.toLowerCase())}`
    );
    ul.appendChild(li);
  }

  divRoot.appendChild(cardPokemon);
  cardPokemon.appendChild(infoPokemon);
  infoPokemon.appendChild(namePokemon);
  cardPokemon.appendChild(containerImage);
  containerImage.appendChild(imgPokemon);
  infoPokemon.appendChild(ul);
  buttonFav.appendChild(icon);
  cardPokemon.appendChild(buttonFav);
}
