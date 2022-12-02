function treatName(name){
  let newName = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  newName = newName.replace(/ g/, "-");
  return newName;
}