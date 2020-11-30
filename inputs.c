#include <stdio.h> // Libreria inputs and outputs
#include <stdlib.h> // Libreria estandar de c
#include <stdbool.h> // Permite manejar valores booleanos

int main(){
  int integerA;
  int integerB;
  float floatA;
  char letterA;

  printf("Ingresa el valor del entero A: \n");// Output
  //    que , donde lo guardamos
  scanf("%i",& integerA);// Input

  printf("Ingresa el valor del entero B: \n");// Output
  scanf("%i",& integerB);// Input

  int res = integerA * integerB;

  printf("El entero a es: %i",res);// Output

  return 0;
}

