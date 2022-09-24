import React, {useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Text, Image} from 'react-native';

export default function Loading({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 500);
  }, [navigation]);

  return (
    <View style={[styles.container, {backgroundColor: '#9ECF8D'}]}>
      <Image
        source={require('../assets/images/pokemon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <ActivityIndicator
          size="large"
          color={'white'}
          style={{
            marginTop: 20,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'absolute',
    top: 220,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
});
