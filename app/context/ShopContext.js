import React, {useEffect, useState} from 'react';
import axios from 'axios';
import StoreContext from './store-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShopContextProvider = ({children}) => {
  const [pokemons, setPokemons] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [initialState, setInitialState] = useState([]);

  //Auth
  const [userInfo, setUserInfo] = useState({});
  const [isOnline, setIsOnline] = useState(false);

  //Cart
  const addPokemon = async (pokemon, changeState) => {
    console.log('POKEMON RECEIVED ===== ', pokemon);
    const exist = pokemons.find(item => item.id === pokemon.id);
    if (exist) {
      console.log('THIS POKEMON ALREADY EXISTS');
      /* setPokemons(
        pokemons.map(item =>
          item.id === pokemon.id ? {...exist, qty: item.qty + 1} : item,
        ),
      ); */
      changeState(false);
    } else {
      console.log('IT DOES NOT EXIST, ADDING');
      let pokemonsTemp = [...pokemons, {...pokemon}];
      setPokemons(pokemonsTemp);
      console.log('SAVING POKEDEX ', pokemonsTemp);
      try {
        const jsonValue = JSON.stringify(pokemonsTemp);
        console.log('EL GUARDADO ', jsonValue);
        await AsyncStorage.setItem(`pokedex`, jsonValue);

        changeState(true);
      } catch (error) {
        changeState(false);
        console.log(error);
      }
    }
  };

  const removePokemon = pokemon => {
    const exist = pokemons.find(item => item.id === pokemon.id);
    if (exist.qty === 1) {
      setPokemons(pokemons.filter(item => item.id !== pokemon.id));
    } else {
      setPokemons(
        pokemons.map(item =>
          item.id === pokemon.id ? {...exist, qty: item.qty - 1} : item,
        ),
      );
    }
  };
  const deletePokemon = pokemon => {
    setPokemons(pokemons.filter(p => p.id !== pokemon.id));
  };
  clearPokedex;

  const clearPokedex = () => {
    setPokemons([]);
  };

  const savePokedex = async id => {
    try {
      const jsonValue = JSON.stringify(pokemons);
      await AsyncStorage.setItem(`pokedex`, jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const loadPokedex2 = async id => {
    try {
      const value = await AsyncStorage.getItem(`pokedex`);
      if (value !== null) {
        setPokemons(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToPokedex = async pokemon => {
    console.log('ARRAY === ', pokemon);
    if (pokemon != undefined)
      try {
        var existingPokes = await AsyncStorage.getItem('pokedex');
        console.log('EXISTING POKES === ', existingPokes);
        let pokemones = [];
        if (existingPokes !== null) {
          pokemones = JSON.parse(existingPokes);
          console.log('pokemones === ', pokemones);
          pokemones.push(pokemon);
          console.log('pokemones after push === ', pokemones);
          const jsonValue = JSON.stringify(pokemones);
          await AsyncStorage.setItem(`pokedex`, jsonValue);
          setPokemons(pokemones);
        } else {
          const jsonValue = JSON.stringify(array);
          await AsyncStorage.setItem(`pokedex`, jsonValue);
          setPokemons(array);
        }
      } catch (error) {
        console.log(error);
      }
  };

  const loadPokedex = async id => {
    console.log('GETTING POKEDEX');
    try {
      //const value = await AsyncStorage.getItem(`ticket-${id}`);
      const value = await AsyncStorage.getItem(`pokedex`);
      console.log('SESSION VALUE ', value);
      if (value !== null) {
        setPokemons(JSON.parse(value));
        console.log('POKEMONS: ', JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setSession = async data => {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('pokemon-master', jsonValue);
  };

  //Auth
  const userLogin = (email, password, amonos) => {};

  const userLogout = async () => {
    try {
      await AsyncStorage.removeItem('pokemon-master');
      await AsyncStorage.removeItem(`pokedex`);
      setUserInfo({});
      setPokemons([]);
      setIsOnline(false);
      console.log('Data removed');
    } catch (err) {
      console.log(err.message);
    }
  };

  const loadUsers = async () => {
    try {
      console.log('OBTENIENDO USUARIOS');
      const value = await AsyncStorage.getItem('pokemon-master');
      if (value !== null) {
        setUserInfo(JSON.parse(value));
        setIsOnline(true);
        setLoading(false);
        console.log('USUARIO: ', JSON.parse(value));
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //orders

  useEffect(() => {
    savePokedex();
  }, [pokemons]);

  useEffect(() => {
    loadUsers();
    console.log('CARGANDO USER', userInfo._id);

    loadPokedex(userInfo._id);
  }, [isOnline]);

  const values = {
    //Products

    error,
    //Auth
    userLogin,
    userLogout,

    userInfo,

    loading,
    setLoading,
    initialState,
    isOnline,
    //cart
    addPokemon,
    removePokemon,
    deletePokemon,
    clearPokedex,
    pokemons,
    addToPokedex,
  };
  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};

export default ShopContextProvider;
