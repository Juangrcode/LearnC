var dario = {
  nombre = "Dario",
  apellido = "Susnisky",
  edad = 27
}

function ImprimirNombreEnMayusculas({persona}) {
  //var nombre = persona.nombre
  var {Nombre}= persona
  console.log(nombre.toUpperCase())
}

ImprimirNombreEnMayusculas(sacha)
ImprimirNombreEnMayusculas(dario)
//ImprimirNombreEnMayusculas({nombre : "Pepito"})
//ImprimirNombreEnMayusculas({apellido: "Gomez" })

function cumpleaños(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}