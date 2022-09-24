import {ADD_POKEMON, REMOVE_POKEMON, CLEAR_POKEDEX} from '../constants';

export const addPokemon = payload => {
  return {
    type: ADD_POKEMON,
    payload,
  };
};

export const removePokemon = payload => {
  return {
    type: REMOVE_POKEMON,
    payload,
  };
};

export const clearPokedex = () => {
  return {
    type: CLEAR_POKEDEX,
  };
};
