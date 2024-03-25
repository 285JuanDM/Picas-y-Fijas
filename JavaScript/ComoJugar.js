const comoJugar = document.getElementById("comoJugar")
const explicacion = document.getElementById("explicacion")
const cerrarExplicacion = document.getElementById("cerrarExplicacion")

comoJugar.addEventListener("mouseover", function () {
    comoJugar.classList.add("pulse")
    comoJugar.addEventListener("animationend", function () {
        comoJugar.classList.remove("pulse")
    }, { once: true })
})

comoJugar.addEventListener("mousedown", function () {
    explicacion.style.display = "flex"
})

cerrarExplicacion.addEventListener("mousedown", function () {
    explicacion.style.display = "none"
})