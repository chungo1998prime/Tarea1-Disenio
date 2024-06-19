
//Ejercicio 1
const libros = [ { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 
    1967 }, { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 }, { 
    titulo: "1984", autor: "George Orwell", año: 1949 } ];

    const autores= [];
    for (let i=0;  i< libros.length; i++){
        autores.push(libros[i].autor);
    }


console.log(autores);

// Ejercicio 2
const empleado = { nombre: "Jesus", salario: 10000, antiguedad: 6 };

if (empleado.antiguedad > 5) {
    empleado.salario *= 1.10;  
  }
  
  console.log(`Nombre: ${empleado.nombre}`);
  console.log(`Salario: ${empleado.salario}`);
  console.log(`Antiguedad: ${empleado.antiguedad}`);

//Ejercicio 3
const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2];

let numeroMayor = numeros[0];  

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeroMayor) {
    numeroMayor = numeros[i];  
  }
}

console.log(`El numero mayor es: ${numeroMayor}`);

//Ejercicio 4



let sumaImpares = 0;
let conteoImpares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) {  
    sumaImpares += numeros[i];
    conteoImpares++;
  }
}

const promedioImpares = sumaImpares / conteoImpares;

console.log(`El promedio de los numeros impares es: ${promedioImpares}`);

//Ejercicio 5

const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };

const { nombre, edad, ciudad } = persona;

console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Ciudad: ${ciudad}`);