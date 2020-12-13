#include <stdio.h>
#include <stdlib.h>



int main()
{
    float height, radio;

    printf("What is the height of cylinder: \n");
    scanf("%f", &height);

    printf("What is the radio of cylinde: \n");
    scanf("%f", &radio);

    float area = ((2 * 3.14) * radio) * (height + radio);

    printf("The area is: %f \n", area);

    float volumen = 3.14 * (radio * radio)  *height;

    printf("%f", volumen);

}