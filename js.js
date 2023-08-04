
let names = ["Ikram", "Irina", "Maribel", "Lola", "Javi", "Gabriela", "Pamela", "Manuel", "Minerva", "Nelly", "Jesabel", "Cyntia", "Jhoana", "Irina S.", "Tati", "Nadia", "Halima", "Telma"];

document.getElementById("boton-elegir").addEventListener("click", generate);

function generate() {
    if (names.length === 0) {
        alert('Game Over');
        return;
    }
  
    let posicionAleatoria = Math.floor(Math.random() * names.length);
    let personaElegida = names[posicionAleatoria];
  
    names.splice(posicionAleatoria, 1);
    document.getElementById('result').innerHTML = personaElegida;
}

console.log('irina')
