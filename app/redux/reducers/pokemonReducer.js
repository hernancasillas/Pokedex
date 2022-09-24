import {ADD_POKEMON, REMOVE_POKEMON, CLEAR_POKEDEX} from '../constants';

const pokedex = (state = [], action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return [...state, action.payload];
    case REMOVE_POKEMON:
      return state.filter(pokemon => pokemon !== action.payload);
    case CLEAR_POKEDEX:
      return (state = []);
  }
  return state;
};

export default pokedex;
