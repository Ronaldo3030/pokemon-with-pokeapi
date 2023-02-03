let position = 24;
let requestMade = false;
window.addEventListener('scroll', async () => {
  let quantityPokemons = 24;
  if ($(window).scrollTop() + $(window).height() >= $(document).height() && !requestMade) {
    $("#loader").css("display", "flex");
    requestMade = true;
    await showPokemons(position, quantityPokemons);
    position = position + quantityPokemons;
    requestMade = false;
    $("#loader").css("display", "none");
    return;
  }
});