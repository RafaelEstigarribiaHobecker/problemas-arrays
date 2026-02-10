/*Escribe una función arrayToList que construya una estructura de lista como
* */

function arrayToList(array) {
    let lista = null; // Empezamos por el final de la lista
    for (let i = array.length - 1; i >= 0; i--) {
        // Creamos un nuevo objeto que apunta a la 'lista' anterior

        lista = {value: array[i], rest: lista};
    }
    return lista;
}

console.log(arrayToList([2, 3, 4, 5, 6]));

/*  Escribe una
*   función listToArray que produzca un array a partir de una lista
*/

function listToArray(lista) {
    let array = [];
    // Empezamos en 'lista'. Mientras no sea null, saltamos al siguiente 'rest'

    for (let nodo = lista; nodo !== null; nodo = nodo.rest) {
        array.push(nodo.value);
    }
    return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));

/*Agrega las funciones auxiliares prepend, que toma un elemento y una lista y crea una
* nueva lista que añade el elemento al principio de la lista de entrada, y nth, que
* toma una lista y un número y devuelve el elemento en la posición dada en la
* lista (siendo cero el primer elemento) o undefined cuando no hay tal elemento.*/

function prepend(valor, lista) {
    return {
        value: valor,
        rest: lista
    };
}

let listaBase = arrayToList([20, 30]);
let listaNueva = prepend(21, listaBase);

console.log(listaNueva);

console.log(listToArray(listaNueva));

function nth(lista, n) {
    //Caso base 1: Si la lista es null, el elemento no existe
    if (!lista) return undefined;

    //Caso base 2: Si n es 0, hemos llegado a la posición deseada
    if (n === 0) return lista.value;

    //Paso recursivo: llamamos a nth con el RESTO de la lista y n -1
    return nth(lista.rest, n - 1);
}

let miLista = arrayToList([10, 20, 30, 40, 50]);
console.log(nth(miLista, 1));

console.log(nth(miLista, 3));

console.log(nth(miLista, 8));