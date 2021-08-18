//Declarativas

function mifuncion() {
  return 6;
}
mifuncion;

//Exprecion

var mifuncion = function (a, b) {
  return a + b;
};
mifuncion();

//Consola

function saludar(Persona) {
  console.log(Persona);
}

saludar("Diego");
//funtion "variable" (parametro sin valor){
//console log (comando para copilador) (parametro sin valor hasta que se llame)
//"variable" (nombre o numero al que se le va a llamar)

function saludar(Persona) {
  console.log(`hola ${persona}`);
}

saludar("Diego");
