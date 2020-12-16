// 1. ingresa la temperatura en grados Fahrenheit
// 2. Realiza la operacion para convertir de grados Fahrenheit a Celcius
// 3. imprime el resultado de la conversion
// formula --Celcius = (fahrenheit - 32) * 5 / 9----
#include <stdlib.h>
#include <stdio.h>

int main () {

int GF ; 


printf ("Cual es el grado que quiere poner? \n");
scanf ("%i",&GF);

float res = ((GF - 32) * 5/9);
printf ("El resultado de pasar grados Fahrenheit a Celcius es: %f \n ", res);


}





}
