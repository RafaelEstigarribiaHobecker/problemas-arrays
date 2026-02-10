/*
*
* Para este ejercicio, escribe dos fun ciones, reverseArray y reverseArrayInPlace.
* La primera, reverseArray, debería tomar un array como argumento y producir un nuevo
* array que tenga los mismos elementos en orden inverso. La segunda, reverseArrayInPlace,
* debería hacer lo que hace el método reverse: modificar el array dado como argumento
* invirtiendo sus elementos. Ninguna de las funciones puede utilizar el método
* reverse estándar.
*
*/

function reverseArray(lista) {
    let array = [];
    for (let element of lista) {
        array.unshift(element);
    }
    return array;
}

console.log(reverseArray([2, 3, 4, 5]));

function reverseArrayInPlace(lista) {
    let izquierda = 0;
    let derecha = lista.length - 1;

    while (izquierda < derecha) {
        // Intercambio mecánico
        let aux = lista[izquierda];
        lista[izquierda] = lista[derecha];
        lista[derecha] = aux;

        //Movemos los punteros hacia el centro
        izquierda++;
        derecha--;
    }
    return lista;

}

console.log(reverseArrayInPlace([4, 3, 5, 6, 8, 9]));