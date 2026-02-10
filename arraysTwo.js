//Mutabilidad

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 === object2);

console.log(object1 === object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);


// const y  let

const score = {visitors: 0, home: 0};
// Esto está bien
score.visitors = 1;

//Esto está mal
// score={visitors:1,home:1};


// El diario del Licántropo

let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
console.log(journal[0]);

addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);

console.log(journal);


// Función phi que calcula la medida de correlación entre dos variables booleanas

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));


// Más arreología
/* Vimos push y pop, que agregan y eliminan elementos al final de un array.
   Los métodos correspondientes para agregar y eliminar cosas al principio de un array se llaman
   unshift y shift
*/

let listaDeTareas = [];

function recordar(tarea) {
    listaDeTareas.push(tarea);
} //Agrega tareas al final de la cola llamando a recordar

function obtenerTarea() {
    return listaDeTareas.shift();
} /* Cuando estás listo para hacer algo, llamas a obtenerTarea() para obtener
     y eliminar el primer elemento de la cola.*/

function recordarUrgente(tarea) {
    return listaDeTareas.unshift();
} /* Esta función agrega una tarea pero la agrega al principio en lugar de al final
     de la cola.*/

recordar("Cocinar");
recordar("Pintar");
console.log(listaDeTareas[0]);
console.log(listaDeTareas[1]);
console.log(listaDeTareas);
console.log(obtenerTarea());
console.log(recordarUrgente());


//  Para buscar un valor específico, los arrays proporcionan un método indexOf y lastIndexOf

console.log([1, 2, 3, 2, 1].indexOf(2));//Busca a través del array desde principio a fin

console.log([1, 2, 3, 2, 1].lastIndexOf(2));//Busca desde el final en lugar de desde el principio


// Método slice

console.log([0, 1, 2, 3, 4].slice(2, 4));
/* Toma índices de inicio y fin y devuelve un array que solo contiene los elementos entre ellos.
El índice de inicio es inclusivo, mientras qye el índice de fin es exclusivo
 */

console.log([0, 1, 2, 3, 4].slice(2)); // Cuando no se proporciona el índice de fin, slice tomará todos los elementos despiés del índice de inicio.


/* El método concat se puede usar para concatenar arrays y crear un nuevo
 array, similar a lo que el operador + hace para las strings.
*/

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));




