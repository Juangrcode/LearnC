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
const comeMucho =() => math.random() < 0.3
const realizaDeporte = () => math.random() < 0.4

const META = sacha.peso - 3
var dias = 0
while (sacha.peso > META) {
if (comeMucho()){
AumentarDePeso(sacha)
}
if(realizaDeporte()) {
adelgazar(sacha)
}
}

for(var i = 1; i <= 365; i++) {
var random = Math.random ()

if (random < 0.25) {
  AumentarDePeso (sacha)

}

else if (random < 0.5){
adelgazar(sacha)
}
dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${sacha.peso} adelgazo`)