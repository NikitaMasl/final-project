import { COUGHT_POKEMON } from '../index';

const initialState = {
    catched: []
};

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUGHT_POKEMON:            
            return { ...state.initialState, 
                catched: [...state.catched, action.payload]
            }
        default: 
            return state;
    }
}