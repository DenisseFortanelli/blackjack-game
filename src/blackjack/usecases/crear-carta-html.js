/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} retorna una imagen de la carta
 */
export const crearCartaHTML = ( carta ) => {
    if ( !carta ) throw new Error('La carta es obligatoria');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}
