let position = 24;
window.addEventListener('scroll', async () => {
  let quantityPokemons = 24;
  // AO SCROLLAR VAI MAIS DE 3 VEZES, SE FOR ARRASTANDO COM O MOUSE VAI CERTO
  if (window.scrollY + window.innerHeight + 5 > document.body.scrollHeight) {
    console.log("foi")
    await showPokemons(position, quantityPokemons);
    position = position + quantityPokemons;
    return;
  }
});