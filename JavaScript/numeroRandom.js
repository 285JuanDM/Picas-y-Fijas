const generarNumeroRandom = () => {
    const digitos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numeroRandom = '';

    const primerDigito = digitos[Math.floor(Math.random() * digitos.length)];
    numeroRandom += primerDigito;

    for (let i = 0; i < 3; i++) {
        const indice = Math.floor(Math.random() * digitos.length);
        numeroRandom += digitos.splice(indice, 1)[0];
    }

    return parseInt(numeroRandom);
}

export { generarNumeroRandom };