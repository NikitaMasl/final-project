import { COUGHT_POKEMON } from '../index';

export const catchPokemon = (id, name, boolean, date) => {    
    return {
        type: COUGHT_POKEMON,
        payload: {            
            id: id,
            name: name,
            capture: boolean,
            date: date
        }
    }
}