function changeColorAccordingToType(type) {
  switch (type) {
    case "normal":
      corDeFundo.style.backgroundColor = bgColors.Normal;
      return "Normal";
      break;
    case "fighting":
      corDeFundo.style.backgroundColor = bgColors.Lutador;
      return "Lutador";
      break;
    case "flying":
      corDeFundo.style.backgroundColor = bgColors.Voador;
      return "Voador";
      break;
    case "poison":
      corDeFundo.style.backgroundColor = bgColors.Venenoso;
      return "Venenoso";
      break;
    case "ground":
      corDeFundo.style.backgroundColor = bgColors.Terra;
      return "Terra";
      break;
    case "rock":
      corDeFundo.style.backgroundColor = bgColors.Pedra;
      return "Pedra";
      break;
    case "bug":
      corDeFundo.style.backgroundColor = bgColors.Inseto;
      return "Inseto";
      break;
    case "ghost":
      corDeFundo.style.backgroundColor = bgColors.Fantasma;
      return "Fantasma";
      break;
    case "water":
      corDeFundo.style.backgroundColor = bgColors.Agua;
      return "Água";
      break;
    case "steel":
      corDeFundo.style.backgroundColor = bgColors.Aço;
      return "Aço";
      break;
    case "fire":
      corDeFundo.style.backgroundColor = bgColors.Fogo;
      return "Fogo";
      break;
    case "grass":
      corDeFundo.style.backgroundColor = bgColors.Grama;
      return "Grama";
      break;
    case "electric":
      corDeFundo.style.backgroundColor = bgColors.Eletrico;
      return "Eletrico";
      break;
    case "psychic":
      corDeFundo.style.backgroundColor = bgColors.Psiquico;
      return "Psiquico";
      break;
    case "dragon":
      corDeFundo.style.backgroundColor = bgColors.Dragao;
      return "Dragão";
      break;
    case "dark":
      corDeFundo.style.backgroundColor = bgColors.Sombrio;
      return "Sombrio";
      break;
    case "fairy":
      corDeFundo.style.backgroundColor = bgColors.Fada;
      return "Fada";
      break;
    case "ice":
      corDeFundo.style.backgroundColor = bgColors.Gelo;
      return "Gelo";
      break;
  }
}
// FUNÇÃO PARA CLAREAR A COR E ESCURECER A COR
// CLAREAR PARA A BADGE E ESCURECER PARA A BORDA

const bgColors = {
  'Inseto': '#1C4B27',
  'Sombrio': '#040706',
  'Dragao': '#448B95',
  'Eletrico': '#E1E32A',
  'Fada': '#951A44',
  'Lutador': '#994025',
  'Fogo': '#AB1F23',
  'Voador': '#4A677D',
  'Fantasma': '#33336B',
  'Grama': '#147B3D',
  'Terra': '#A9702C',
  'Gelo': '#86D2F5',
  'Normal': '#75515B',
  'Venenoso': '#5E2D88',
  'Psiquico': '#A32B6C',
  'Pedra': '#48180B',
  'Aco': '#5F756D',
  'Agua': '#1552E2',
}