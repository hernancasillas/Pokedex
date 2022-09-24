import React, {createContext} from 'react';

const StoreContext = createContext({
  userInfo: {},
  isOnline: false,
  loading: true,
  lang: 'es',

  //Auth
  userLogin: (email, password) => {},
  userLogout: () => {},
  //Cart
  pokemons: [],
  addPokemon: product => {},
  removePokemon: product => {},
  deletePokemon: product => {},
  clearPokedex: () => {},
  savePokedex: () => {},
  loadPokedex: () => {},
  //Tickets
  tickets: [],
  addTickets: product => {},
  removeTicket: product => {},
  deleteTicket: product => {},
  clearTickets: () => {},

  setLoading: loading => {},
});
export default StoreContext;
