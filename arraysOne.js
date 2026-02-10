// Conjunto de Datos

let listaDeNumeros = [2, 3, 5, 7, 11];

console.log(listaDeNumeros[2]);

console.log(listaDeNumeros[0]);

console.log(listaDeNumeros[2 - 1]);


// Casi todos los valores de Js tienen propiedades. Las excepciones son null y undefined.

let doh = "Doh";
console.log(doh.toUpperCase());

console.log(doh.toLowerCase());

// Este ejemplo demuestra dos métodos que puedes utilizar para manipular arrays:

/*       El método push agrega valores al final de un array. El método pop hace lo opuesto,
         eliminando el último valor en el array y devolviéndolo.
*/

let secuencia = [1, 2, 3];
secuencia.push(4);
secuencia.push(5);
console.log(secuencia);
console.log(secuencia.pop());
console.log(secuencia);


// Objetos

/* Los valores del tipo object son colecciones arbitrarias de propiedades. Una forma
de crear un objeto es usando llaves como una expresión */

let dia1 = {
    hombreArdilla: false,
    eventos: ["trabajo", "tocó árbol", "pizza", "correr"]
};

console.log(dia1.hombreArdilla);

console.log(dia1.lobo);

dia1.lobo = false;
console.log(dia1.lobo);

console.log(dia1.eventos[1]);


// Las propiedades cuyos nombres no son nombres de enlace válidos o números válidos deben ir entre comillas.

let descripciones = {
    trabajo: "Fui a trabajar",
    "tocó árbol": "Tocó un árbol"
};


/* El operador delete es un operador unario que, cuando se aplica a una propiedad de un objeto,
eliminará la propiedad nombrada del objeto.
 */
let unObjeto = {izquierda: 1, derecha: 2};
console.log(unObjeto.izquierda);

delete unObjeto.izquierda;
console.log(unObjeto.izquierda);

console.log("izquierda" in unObjeto);

console.log("derecha" in unObjeto);

// El operador binario in, cuando se aplica a una cadena y un objeto, te dice si ese objeto tiene una propiedad con ese nombre.


// Para averiguar qué propiedades tiene un objeto, puedes utilizar la función Object.keys

console.log(Object.keys({x: 0, y: 0, z: 3}));

// Existe una función Object.assign que copia todas las propiedades de un objeto en otro

let objetoA = {a: 1, b: 2};
Object.assign(objetoA, {b: 3, c: 4});
console.log(objetoA);

