import React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';

const AddPokemon = ({navigation, route}) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://pokeapi.co/api/v2/pokemon', requestOptions)
      .then(response => response.json())
      .then(result => {
        setPokemons(result.results);
      })
      .catch(error => console.log('error', error));
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <View>
      <Header
        title={'Add Pokemon'}
        style={{backgroundColor: '#9ECF8D'}}
        titleStyle={{color: 'white'}}
        renderLeft={() => {
          return <Icon name="chevron-left" size={24} color={'white'} />;
        }}
        onPressLeft={() => {
          navigation.pop();
        }}
      />

      <FlatList
        style={{
          height: '90%',
          width: '80%',
          alignSelf: 'center',
          borderWidth: 0,
          margin: 20,
        }}
        //refreshing={loading}
        /* onRefresh={() => {
          console.log('Actualizando');

          setLoading(true);
                sql.getCorridas(data, changeState); 
        }} */
        data={pokemons}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{margin: 10}}
            onPress={() => {
              navigation.navigate('AddPokemonDetail', {pokemon: item});
            }}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              {capitalizeFirstLetter(item.name)}
            </Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={<View style={{height: 40}}></View>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default AddPokemon;
