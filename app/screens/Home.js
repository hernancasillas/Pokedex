import React from 'react';
import {useContext} from 'react';
import {View, Text, TouchableOpacity, Button, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../components/Header';
import StoreContext from '../context/store-context';

export default function Home({navigation}) {
  const {pokemons} = useContext(StoreContext);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <View>
      <Header
        title={'Pokedex'}
        style={{backgroundColor: '#9ECF8D'}}
        titleStyle={{color: 'white'}}
        renderRight={() => {
          return <Feather name="search" size={22} color={'white'} />;
        }}
        onPressRight={() => {
          navigation.navigate('AddPokemon');
        }}
      />
      {pokemons.length > 0 ? (
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
              style={{
                margin: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('PokemonDetail', {pokemon: item});
              }}>
              <Text style={{fontSize: 20, textAlign: 'center'}}>
                #{item.id}
              </Text>
              <Text style={{fontSize: 20, textAlign: 'center'}}>
                {capitalizeFirstLetter(item.name)}
              </Text>
              <Image
                style={{width: 40, height: 40}}
                source={{uri: item.sprites.front_default}}
              />
            </TouchableOpacity>
          )}
          ListFooterComponent={<View style={{height: 40}}></View>}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 40}}>
            {'No has agregado ningún Pokémon :('}
          </Text>
          <Button
            title="Agrega uno"
            onPress={() => {
              navigation.navigate('AddPokemon');
            }}
            color={'#9ECF8D'}
          />
        </View>
      )}
    </View>
  );
}
