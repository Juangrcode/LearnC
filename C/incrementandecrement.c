#include <stdlib.h>;
#include <stdio.h>;


int main (){

printf("Operaciones de incremento y decremento \n");

int value, res;
 
 value = 25;

 res = value++;// Primero asigna la variable y luego suma 1.

 printf ("Resultado: %i \n");

 value = 25;

 res = ++value;// Primero suma el 1 y luego asigna la variable.

 printf ("Resultado: %i \n");

 value = 25;

 res = value--;// Primero asigna la variable y luego resta.

 printf ("Resultado: %i \n");

 value = 25;

 res = --value;// Primero resta el 1 y luego asigna la variable.

printf ("Resultado: %i \n");

}
