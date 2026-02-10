/**
 * Escribe una función range que tome dos argumentos, inicio y fin, y devuelva
 * un array que contenga todos los números desde inicio hasta fin, incluyendo
 * fin.

 **/

/* function range(inicio,fin){
        let array = [];
        for (let i = inicio; i<=fin;i++){
            array.push(i);
        }

        return array;
*  }
*

**/


function sum(array) {
    let count = 0;
    for (let num of array) {
        count = count + num;
    }

    return count;
}

console.log(`La suma de los elementos es de ${sum(rangeMod(1, 10))}`);

function rangeMod(inicio, fin, paso = 1) {
    let array = [];

    if (paso > 0) {
        for (let i = inicio; i <= fin; i += paso) array.push(i);
    } else {
        // Para pasos negativos, la condición cambia a i >= fin
        for (let i = inicio; i >= fin; i += paso) array.push(i);
    }


    return array;

}

console.log(rangeMod(1, 10, 2));

console.log(rangeMod(5, 2, -1));