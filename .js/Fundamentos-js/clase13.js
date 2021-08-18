var sacha = {
  nombre = "sacha",
  apellido = "lifszyc,",
  edad = 27,
  peso = 75

}

console.log(`Al inicio del año tenemos  ${sacha.nombre} pesa ${sacha.peso}kg`)

const AUMENTAR_PESO = 0.200

const AumentarDePeso = (persona, incremento) =>
persona.peso += AUMENTAR_PESO
const adelgazar = persona => persona.peso -= AUMENTAR_PESO

for(var i = 1; i <= 365; i++) {
var random = Math.random ()

if (random < 0.25) {
  AumentarDePeso (sacha)

}

else if (random < 0.5){
adelgazar(sacha)
}


}

console.log(`Al final del año  ${sacha.nombre} pesa ${sacha.peso.Tofixed(1)}kg`)