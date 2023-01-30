// Your code goes here:

/* NO HACE FALTA:
let nombre;
let año;
let color;
let edad;
let genero;
*/

function renderPerson(nombre,año,color,edad,genero) {
  return `${nombre} is a ${edad} years old ${genero} born in ${año} with ${color} eyes`;
}


  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));

/* OTRA SOLUCION
function renderPerson(nombre,año,color,edad,genero) {
  return nombre+""+" is a "+""+edad+""+" years old "+""+genero+""+" born in "+""+año+""+" with "+""+color+""+" eyes";
}
*/

/* USANDO TEMPLATE con el acento grave para abrir y cerrar y con los $ y llaves para las variables
function renderPerson(nombre,año,color,edad,genero) {
  return `${nombre} is a ${edad} years old ${genero} born in ${año} with ${color} eyes`;
}
*/