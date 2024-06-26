//RESUELVE LOS EJERCICIOS AQUÍ
//[ ] 1.- Dado el objeto empleados, extrae la empleada Ana completa.
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

// asi extraemos name y email como varibles independientes
const {name, email} = empleados[1];

// y asi extraemos el objeto entero
const Ana = empleados[1];

// también podemos hacerlo con el metodo .find()
const buscarAna=(persona)=>{
    const busqueda = empleados.find((empleado) => empleado.name.toLowerCase() === persona.toLowerCase())
}
buscarAna('ana')

// 2.- Dado el objeto empleados, extrae el email del empleado Luis --> Luis@gmail.com
const emailLuis = empleados[0].email;
//o también
const {email} = empleados[0];

// 3.- Usa destructuración para cambiar los valores de a y b;
let list = [5, 3];
let [a, b] = list
[a, b] = [b, a]
console.log(a, b);

// 4.- Dado el objeto HIGH_TEMPERATURES
// Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

const {today: maximaHoy} = HIGH_TEMPERATURES;

const {tomorrow: maximaManana} = HIGH_TEMPERATURES;

console.log(maximaHoy);
console.log(maximaManana);

// Spread/Rest
// 5.- Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
function sumEveryOther (...rest) {
    return rest.reduce((acummulator, currentValue) => acummulator + currentValue)
};

console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26

// 6.- Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números).
function addOnlyNums(...rest) {
    let resultadoNumeros = [];
    let suma = 0;
    rest.forEach(element => {
        if (!isNaN(element) && typeof element === 'number') {
            resultadoNumeros.push(element)
        }});
    return suma = resultadoNumeros.reduce((accumulator, currentValue) => accumulator + currentValue);
}
addOnlyNums(1, "perro", 2, 4); //7

// 7.- Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
function countTheArgs(...rest) {
    return rest.length;
}
console.log(countTheArgs("gato", "perro")); //2
console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4

// 8.- Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
function combineTwoArrays(array1, array2) {
    let arrayCombinado = [...array1, ...array2];
    return arrayCombinado;
}

combineTwoArrays([1, 2, 4], [6, 7, 8, 9]);

// 9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
function onlyUniques(...rest) {
    let argumentosUnicos = [];
    rest.forEach(element => {
        if (!argumentosUnicos.includes(element)) {
            argumentosUnicos.push(element)
        }
    })
    return argumentosUnicos
}

onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

// 10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
function combineAllArrays (...rest) {
    return rest.flat();
}

combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

// 11.- Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
function sumAndSquare(...rest) {
    let numerosCuadrados = [];
    rest.forEach (element => {
        if (element !== isNaN && typeof element === 'number') {
            numerosCuadrados.push(element * element);
        }
    })
    return numerosCuadrados.reduce((accumulator, currentValue) => accumulator + currentValue);
}

sumAndSquare(2, 5, 'perro');