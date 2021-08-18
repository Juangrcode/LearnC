var dario = {
  nombre = "Dario",
  apellido = "Susnisky",
  edad = 27
}

function ImprimirNombreEnMayusculas({nombre}) {
  console.log(nombre.toUpperCase())
}

ImprimirNombreEnMayusculas(sacha)
ImprimirNombreEnMayusculas(dario)
ImprimirNombreEnMayusculas({nombre : "Pepito"})
ImprimirNombreEnMayusculas({apellido: "Gomez" })