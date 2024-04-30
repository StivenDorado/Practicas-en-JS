function example3(){
    //Pedir al usuario que ingrese un año
    let anio = parseInt(prompt("Ingrese un año:"));

    //comprobar si el año es bisiesto
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        alert(anio + " es un año bisiesto.");
    } else {
        alert(anio + " no es un año bisiesto.");
    }

}