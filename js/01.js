function example1() {
    //se le pide al usuario que ingrese un número
    let numero = prompt("Ingrese un número:");

    // Se convierte el número en un entero
    numero = parseInt(numero);

    //comprobar si el número es par o impar
    if (numero % 2 == 0) {
        alert(numero + " es un número par");
    } else {
        alert(numero + " es un número impar");
    }
}
