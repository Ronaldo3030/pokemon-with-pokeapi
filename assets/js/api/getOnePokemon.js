async function getOnePokemon(url){
  return await fetch(url)
    .then(res => {
      return res.json();
    }).then(data => {
      return data;
    }).catch(err => {
      console.log(`Erro: ${err}`);
    });
}