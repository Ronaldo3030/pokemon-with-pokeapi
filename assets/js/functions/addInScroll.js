let position = 24;
let requestMade = false;
window.addEventListener('scroll', async () => {
  let quantityPokemons = 24;
  // AO SCROLLAR VAI MAIS DE 3 VEZES, SE FOR ARRASTANDO COM O MOUSE VAI CERTO
  if ($(window).scrollTop() + $(window).height() >= $(document).height() && !requestMade) {
    requestMade = true;
    await showPokemons(position, quantityPokemons);
    position = position + quantityPokemons;
    requestMade = false;
    return;
  }
});