let position = 24;
window.addEventListener('scroll', () => {
  let quantityPokemons = 24;
  if (window.scrollY + window.innerHeight + 5 > document.body.scrollHeight) {
    showPokemons(position, quantityPokemons);
    position = position + quantityPokemons;
  }
});