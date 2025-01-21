const prompt = require('prompt-sync')();

// Solicitar números al usuario
let numero1 = parseInt(prompt('Ingrese el primer número: '));
let numero2 = parseInt(prompt('Ingrese el segundo número: '));
let numero3 = parseInt(prompt('Ingrese el tercer número: '));

// Verificar que los valores ingresados son números
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    console.log("Por favor, ingrese solo números.");
} else {
    let arregloNumeros = [numero1, numero2, numero3];
    let arregloNumeros1 = [numero1, numero2, numero3];

    // Ordenamiento de menor a mayor
    for (let i = 0; i < arregloNumeros.length - 1; i++) {
        for (let j = 0; j < arregloNumeros.length - i - 1; j++) {
            if (arregloNumeros[j] > arregloNumeros[j + 1]) {
                let temp = arregloNumeros[j];
                arregloNumeros[j] = arregloNumeros[j + 1];
                arregloNumeros[j + 1] = temp;
            }
        }
    }
    
    // Ordenamiento de mayor a menor
    for (let i = 0; i < arregloNumeros1.length - 1; i++) {
        for (let j = 0; j < arregloNumeros1.length - i - 1; j++) {
            if (arregloNumeros1[j] < arregloNumeros1[j + 1]) {
                let temp = arregloNumeros1[j];
                arregloNumeros1[j] = arregloNumeros1[j + 1];
                arregloNumeros1[j + 1] = temp;
            }
        }
    }

    // Comprobar si todos los números son iguales
    const todosIguales = (numero1 === numero2 && numero2 === numero3);
    if (todosIguales) {
        console.log('Todos los números ingresados son iguales:', arregloNumeros);
    } else {
        console.log('Números ordenados de menor a mayor:', arregloNumeros);
        console.log('Números ordenados de mayor a menor:', arregloNumeros1);
    }
}

