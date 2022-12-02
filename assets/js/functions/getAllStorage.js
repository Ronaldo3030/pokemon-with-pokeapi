function getAllStorage(){
  let storage = [];

  for(let i = 0; i < localStorage.length; i++){
    storage[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
  }

  return storage;
}