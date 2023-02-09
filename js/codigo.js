//Definición de funciones
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra";
  } else if (jugada == 2) {
    resultado = "Papel";
  } else if (jugada == 3) {
    resultado = "Tijera";
  } else {
    resultado = "Mala Opcion";
  }
  return resultado;
}
//Declaración de Variables (1 es piedra, 2 es papel, 3 es tijera)
let JUGADOR = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(1, 3);
  JUGADOR = prompt(" ELIJE: 1 para piedra, 2 papel, 3 tijera");
  alert("PC elige: " + eleccion(pc));
  alert("Tu eliges: " + eleccion(JUGADOR));
  // Combate
  if (pc == JUGADOR) alert("EMPATE");
  else if (
    (JUGADOR == 1 && pc == 3) ||
    (JUGADOR == 2 && pc == 1) ||
    (JUGADOR == 3 && pc == 2)
  ) {
    alert("GANASTE");
    triunfos = triunfos + 1;
  } else {
    alert("PERDISTE");
    perdidas = perdidas + 1;
  }
}
alert("Ganaste " + triunfos + " Veces. Perdiste " + perdidas);
