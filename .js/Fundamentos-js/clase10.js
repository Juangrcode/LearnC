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
