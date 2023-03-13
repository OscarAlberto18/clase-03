let a = 232;

let b = 120; // let arranca...desde ES6

let myDOM = document; // 

console.log(myDOM);


//let nombre = prompt('¿Cuál es tu nombre?')
//alert(`Hola ${nombre}`)

let mensaje = prompt("Por favor, ingrese su nombre:");

let divmensaje = document.getElementById("ejemplo");

divmensaje.innerHTML = `¡Bienvenido ${mensaje}!`;