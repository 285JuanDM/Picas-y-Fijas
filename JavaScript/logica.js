import { generarNumeroRandom } from "/JavaScript/numeroRandom.js";
import { verificarFijas, verificarPicas } from "/JavaScript/PicasFijas.js";

const inputNumero = document.getElementById("numeroInput");
const tablaJuego = document.getElementById("tablaJuego");
const numeroRandom = generarNumeroRandom();
let numeroIngresado = 0

console.log(numeroRandom);

inputNumero.addEventListener("mousedown", function () {
    inputNumero.placeholder = "";
})

inputNumero.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        numeroIngresado = inputNumero.value;
        if (new Set(numeroIngresado).size === 4) {

            if (verificarFijas(String(numeroRandom), numeroIngresado) === 4) {
                alert("¡Has ganado!")
                location.reload();
            }
            agregarNumeroATabla(numeroIngresado, numeroRandom);
            inputNumero.value = "";
        } else {
            inputNumero.classList.add("shake")
            inputNumero.addEventListener("animationend", function () {
                inputNumero.classList.remove("shake")
            }, { once: true })
        }
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        if (numeroIngresado === 0) {
            inputNumero.classList.add("shake")
            inputNumero.addEventListener("animationend", function () {
                inputNumero.classList.remove("shake")
            }, { once: true })
        } else {
            inputNumero.value = numeroIngresado;
        }
    }
})

const agregarNumeroATabla = (numero, numeroRandom) => {
    const fila = tablaJuego.insertRow();
    const celdaNumero = fila.insertCell(0);
    const celdaPicas = fila.insertCell(1);
    const celdaFijas = fila.insertCell(2);
    celdaNumero.textContent = numero;
    celdaPicas.textContent = verificarPicas(String(numeroRandom), numero);
    celdaFijas.textContent = verificarFijas(String(numeroRandom), numero);
}