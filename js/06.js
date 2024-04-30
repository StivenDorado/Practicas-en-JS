function example6(){
// Pedir al usuario que ingrese una calificación numérica
let calificacion = parseFloat(prompt("Ingrese su calificación numérica:"));

// Verificar la calificación y mostrar su equivalente en letras
if (calificacion >= 90) {
    console.log("Su calificación es: A");
} else if (calificacion >= 80) {
    console.log("Su calificación es: B");
} else if (calificacion >= 70) {
    console.log("Su calificación es: C");
} else if (calificacion >= 60) {
    console.log("Su calificación es: D");
} else {
    console.log("Su calificación es: F");
}
}