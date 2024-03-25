const verificarFijas = (numeroRandom, numeroIngresado) => {
    let fijas = 0;
    for (let i = 0; i < 4; i++) { 
        if (numeroIngresado[i] == numeroRandom[i]) {
            fijas++;
        }
    }
    return fijas
}

const verificarPicas = (numeroRandom, numeroIngresado) => {
    let picas = 0;
    for (let i = 0; i < 4; i++) {
        if (numeroRandom.includes(numeroIngresado[i]) && numeroIngresado[i] !== numeroRandom[i]) {
            picas++;
        }
    }
    return picas;
}

export { verificarFijas, verificarPicas }