async function getRequest(url){
  let req = await fetch(url)
    .then(res => {
      return res.json();
    }).then(data => {
      return data;
    }).catch(err => {
      console.log("ERRO: " + err);
    });
  
  return req;
}