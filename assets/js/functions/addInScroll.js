let position = 24;
let requestMade = false;
window.addEventListener('scroll', async () => {
  let quantityPokemons = 24;
  $("#loader").css("display", "flex");
  if ($(window).scrollTop() + $(window).height() >= $(document).height() && !requestMade) {
    requestMade = true;
    await showPokemons(position, quantityPokemons);
    position = position + quantityPokemons;
    requestMade = false;
    $("#loader").css("display", "none");
    return;
  }
});