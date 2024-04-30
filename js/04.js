function example4(){
    //Pedir al usuario que ingrese una letra
    let letra = prompt("Ingrese una letra:").toLowerCase();

    //Comprobar si es vocal o consonante
    if (letra.length === 1 && /^[a-z]$/.test(letra)) {
         if (/[aeiou]/.test(letra)) {
            alert(letra + " es una vocal.");
        } else {
            alert(letra + " es una consonante.");
        }
    } else {
     alert("Por favor, ingrese una única letra del alfabeto.");
    }
}