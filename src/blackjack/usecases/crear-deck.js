import _ from 'underscore';

// Esta función crea un nuevo deck

/**
 * Esta función crea un nuevo deck de cartas
 * @param {Array<String>} tipos Ejemplo ['C','D','H','S']
 * @param {Array<String>} especiales Ejemplo ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tipos, especiales) => {

    if(! tipos || tipos.length === 0) 
        throw new Error('tipos de carta son obligatorios');
    if(! especiales || especiales.length === 0) 
        throw new Error('tipos especiales son obligatorios');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}
