// String y Propiedades

// Cada valor string tiene varios métodos. Algunos muy útiles son slice e indexOf, que se parecen a los métodos de arrays del mismo nombre:

console.log("coconuts".slice(4, 7));

console.log("coconut".indexOf("u"));

// Una diferencia es que el indexOf de un string puede buscar un string que contenga más de un carácter, mientras que el método correspondiente de arrays busca solo un elemento:

console.log("one two three".indexOf("ee"));


// El método trim elimina los espacios en blanco ( espacios, saltos de línea, tabulaciones y caracteres similares) del principio y final de cadena

console.log(" okay \n ".trim());

// padStart recibe la longitud deseada y el carácter de relleno como argumentos

console.log(String(6).padStart(5, "0"));

// Puedes dividir una cadena en cada ocurrencia de otra cadena con split y unirla nuevamente con join:

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
console.log(words.join(" "));


// Una cadena puede repetirse con repeat

console.log("LA".repeat(3));

// Propiedad length del tipo string

let string = "abc";

console.log(string.length);

console.log(string[1]);

/* Parámetros restantes

    Puede ser útil para una función aceptar cualquier cantidad de argumento. Para escribir
    una función así, colocas tres puntos antes del último parámetro de la función
*/

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}


console.log(max(4, 1, 9, -2, 13));

let numbers = [5, 1, 7];

console.log(max(...numbers));
