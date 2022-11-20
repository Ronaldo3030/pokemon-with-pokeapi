function createCard(idDiv, img, name) {
  let divRoot = document.getElementById(idDiv);

  let cardPokemon = document.createElement("div");
  cardPokemon.classList.add("card-pokemon");

  let infoPokemon = document.createElement("div");
  infoPokemon.classList.add("info-pokemon");

  let containerImage = document.createElement("div");
  containerImage.classList.add("container-image");

  let imgPokemon = document.createElement("img");
  imgPokemon.classList.add("img-pokemon");
  imgPokemon.setAttribute("src", img);

  let textNamePokemon = document.createTextNode(name);
  let namePokemon = document.createElement("p");
  namePokemon.classList.add("name-pokemon");
  namePokemon.appendChild(textNamePokemon);



  // let ul = document.createElement("ul");
  // let li = document.createElement("li");

  divRoot.appendChild(cardPokemon);
  cardPokemon.appendChild(infoPokemon);
  infoPokemon.appendChild(namePokemon);
  cardPokemon.appendChild(containerImage);
  containerImage.appendChild(imgPokemon);
}