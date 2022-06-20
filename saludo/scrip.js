console.log("Se nota que todabia me extrañas");


setInterval(cambiarSaludo, 2000);

/**
 * Cambia la frase en el titulo h2
 */
function cambiarSaludo() {
    let frase = document.getElementsByTagName("h2")[1];
    console.log(frase);
    if (frase.innerHTML == "Ganando como siempre , mis cielas") {
        frase.innerHTML = "Impongo moda para las niñas!";
    }
    else {
        frase.innerHTML = "Ganando como siempre , mis cielas";
    }
    console.log("frase :" + frase);
}