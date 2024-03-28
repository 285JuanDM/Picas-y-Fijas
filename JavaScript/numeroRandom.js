const generarNumeroRandom = () => {
    const digitos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numeroRandom = '';

    for (let i = 0; i < 4; i++) {
        const indice = Math.floor(Math.random() * digitos.length);
        numeroRandom += digitos.splice(indice, 1)[0];
    }

    return numeroRandom;
}

export { generarNumeroRandom };