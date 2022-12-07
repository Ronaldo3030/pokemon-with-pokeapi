function checkLegendary(name){
  switch (name) {
    case 'mew':
      return true
      break;
    case 'mewtwo':
      return true
      break;
    default:
      break;
  }

  // let urlLegendary = `https://pokeapi.co/api/v2/pokemon-species/${name}`
  // let isLegendary = await fetch(urlLegendary)
  //   .then(res => {
  //     return res.json();
  //   }).then(data => {
  //     if(data.is_legendary || data.is_myhical){
  //       return data;
  //     }
  //   }).catch(err => {
  //     console.log(`Erro: ${err}`);
  //   });
  
  // console.log(isLegendary);
  // return isLegendary;
}