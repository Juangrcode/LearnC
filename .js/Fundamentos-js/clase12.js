var sacha = {
  nombre: 'sacha',
  apellido: 'lifszyc',
  edad: 28,
  ingeniero: true,
  cantante: false,
  guitarrista: false,
  dj: false,
  cocinero: false,
  drone: true,
};
var juan = {
  nombre: 'juan',
  apellido: 'gomez',
  edad: 15,
  cantante: false,
  guitarrista: false,
  dj: true,
  cocinero: false,
  drone: true,
};
function ImprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);

  if (persona.ingeniero) {
    console.log('ingeniero');
  }

  if (persona.cocinero) {
    console.log('cocinero');
  }
  if (persona.guitarrista) {
    console.log('guitarrista');
  }
  if (persona.dj) {
    console.log('dj');
  }
  if (persona.cantante) {
    console.log('cantante');
  }
  if (persona.drone) {
    console.log('drone');
  }
}

const Mayoria_De_Edad = 18;
const EsMayorDeEdad = ({ edad }) => edad >= Mayoria_De_Edad;
function imprimirSiesMayordeEdad(persona) {
  if (EsMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}
const esMayorDeEdad = ({ edad }) => edad >= Mayoria_De_Edad;
const esMenorDeEdad = ({ edad }) => !EsMayorDeEdad({ edad });
function permitirAcceso(persona) {
  esMenorDeEdad(persona);
}
