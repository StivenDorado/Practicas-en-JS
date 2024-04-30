function example5(){
// Pedir al usuario que ingrese un mes
let mes = prompt("Ingrese un mes (en minúsculas):").toLowerCase();

// Definir los meses y sus días
let meses = {
    "enero": 31,
    "febrero": 28,
    "marzo": 31,
    "abril": 30,
    "mayo": 31,
    "junio": 30,
    "julio": 31,
    "agosto": 31,
    "septiembre": 30,
    "octubre": 31,
    "noviembre": 30,
    "diciembre": 31
};

// Verificar si el mes está en la lista
if (meses.hasOwnProperty(mes)) {
    console.log("El mes de " + mes + " tiene " + meses[mes] + " días.");
} else {
    console.log("No se reconoce el mes ingresado.");
}
}