// Obtener los elementos del DOM

const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const select3 = document.getElementById('select3');
const checkBtn = document.getElementById('checkBtn');
const resultDiv = document.getElementById('result');

// Función para verificar el password

function checkPassword() {
    const password = select1.value + select2.value + select3.value;
    if (password === '911') {
        resultDiv.textContent = 'Password 1 correcto';
    } else if (password === '714') {
        resultDiv.textContent = 'Password 2 correcto';
    } else {
        resultDiv.textContent = 'Password incorrecto';
    }
}

// Agregar el evento click al botón

checkBtn.addEventListener('click', checkPassword);