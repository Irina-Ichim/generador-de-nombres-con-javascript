


//function azar () {
//   variable = Math.floor(Math.random() * 16);
//   document.getElementById('random').innerHTML = variable;
//}
//let containeruno = document.querySelector('.containeruno');
//let btn = document.getElementById('spin');
//let number = Math.ceil(Math.random() * 1000);

//btn.onclick = function() {
// containeruno.style.transform = "rotate(" + number + "deg)";
//number += Math.ceil(Math.random() * 1000);
//}
//variable = Math.floor(Math.random() * 16);
//   document.getElementById('random').innerHTML = variable;
//const numeros = [1, 2, 2, 3, 4, 4, 5];

//const eliminaDuplicados = (arr) => {

//  const unicos = [];
//  arr.forEach( (elemento) => {
//    if (!unicos.includes(elemento)) {
//      unicos.push(elemento);
//    }
//  });

// return unicos;
//}

//console.log(eliminaDuplicados(numeros)); // [1, 2, 3, 4, 5]


let names = ["Ikram", "Irina", "Maribel", "Lola", "Javi", "Gabriela", "Pamela", "Manuel", "Minerva", "Nelly", "Jesabel", "Cyntia", "Jhoana", "Irina S.", "Tati", "Nadia", "Halima", "Telma"];

document.getElementById("boton-elegir").addEventListener("click", generate);

let emptyArrayNames = [] ;

function generate() {
  
  if (names.length === 0){
   
    alert('Game Over')
  }
  
  let posicionAleatoria = Math.round(Math.random() * (names.length));
  
  let personaElegida = names[posicionAleatoria];
  console.log(personaElegida);
  emptyArrayNames.push(names.splice(personaElegida, 1))
  //pintarlo por pantalla
  document.getElementById('result').innerHTML = personaElegida;
  
  // borrarlo del array
 

 
}



