const btn = document.getElementById('verificar');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const total= document.getElementById('total');

// Función para verificar el password

function checKInput() {
    if (+num1.value < 0) {
        num1.value = 0;
    }
    const totalSticker = +num1.value + +num2.value + +num3.value;
    if (totalSticker > 10) {
        total.innerHTML = 'LLEVAS DEMASIADOS STICKER';
    } else {
        total.innerHTML = 'LLEVAS ' + totalSticker + ' STICKER';
    }
    console.log("TotalSticker: " + totalSticker);
}

num1.addEventListener("keydown", (event) => {
    if (event.isComposing || event.keyCode ===229) {
        return;
    }
    console.log(event);
});

btn.addEventListener("click", checKInput);

/*function sumarImagenes() {
    let numeroInput = document.getElementById("numero").value;
    let resultado = 0;
    const imagenes = document.getElementsByTagName("img");
    for (let i = 0; i < imagenes.length; i++) {
        resultado += parseInt(imagenes[i].alt.match(/\d+/));
    }
    resultado += parseInt(numeroInput);
    if (resultado <= 10) {
        alert("El resultado de la suma es: " + resultado);
    } else {
        alert("El resultado no puede ser mayor a 10");
        return;
    }
}
*/

