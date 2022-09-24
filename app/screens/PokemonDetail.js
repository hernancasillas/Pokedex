import React from 'react';
import {useContext} from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  Image,
  ActivityIndicator,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';
import StoreContext from '../context/store-context';

const PokemonDetail = ({navigation, route}) => {
  const {pokemon} = route.params;
  const {addPokemon} = useContext(StoreContext);

  const [loading, setLoading] = useState(true);

  const [moves, setMoves] = useState([]);

  useEffect(() => {
    const last5 = pokemon.moves.slice(-5);
    console.log(last5);

    setMoves(last5);
    setLoading(false);
  }, []);

  const changeState = isGood => {
    if (!isGood) Alert.alert('Ocurrió un error al agregar el Pokémon :(');
    else navigation.navigate('Home');
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <View>
      <Header
        style={{backgroundColor: '#9ECF8D', color: 'white'}}
        title={'Detalles'}
        titleStyle={{color: 'white'}}
        renderLeft={() => {
          return <Icon name="chevron-left" size={24} color={'white'} />;
        }}
        onPressLeft={() => {
          navigation.navigate('Home');
        }}
      />
      {loading ? (
        <View
          style={{
            height: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size={'large'} color={'#9ECF8D  '} />
        </View>
      ) : (
        <View style={{margin: 20, alignItems: 'center', marginBottom: 40}}>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: pokemon.sprites.front_default}}
          />
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            {pokemon.name.toUpperCase()}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {pokemon.types.map((element, index) => (
              <Text
                style={{
                  margin: 10,
                  fontSize: 18,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'grey',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  elevation: 2,
                  backgroundColor: 'white',
                }}>
                {capitalizeFirstLetter(element.type.name)}
              </Text>
            ))}
          </View>
          <Text
            style={{marginHorizontal: 20, fontSize: 30, fontWeight: 'bold'}}>
            Moves
          </Text>
          {moves.map((element, index) => (
            <Text
              style={{marginHorizontal: 20, marginVertical: 10, fontSize: 22}}>
              {capitalizeFirstLetter(element.move.name)}
            </Text>
          ))}
          <View style={{height: 40}} />
        </View>
      )}
    </View>
  );
};

export default PokemonDetail;
