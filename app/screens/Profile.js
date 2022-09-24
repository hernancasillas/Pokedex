import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

import Header from '../components/Header';
import {useContext} from 'react';
import StoreContext from '../context/store-context';
import UserAvatar from 'react-native-user-avatar';

export default function Profile({navigation}) {
  const {userLogout} = useContext(StoreContext);

  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [image, setImage] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const secondTextInput = useRef();

  const dispatch = useDispatch();

  const onLogOut = () => {
    setLoading(true);
    /* dispatch(AuthActions.authentication(false, response => {})); */
  };

  return (
    <View style={{flex: 1}}>
      <Header
        style={{backgroundColor: '#9ECF8D', color: 'white'}}
        title={'Perfil'}
        titleStyle={{color: 'white'}}
        renderRight={() => {
          return <Feather name="edit" size={24} color={'white'} />;
        }}
        onPressRight={() => {
          navigation.navigate('EditProfile');
        }}
      />
      <SafeAreaView style={{flex: 1}} edges={['right', 'left', 'bottom']}>
        <ScrollView>
          <View style={styles.contain}>
            {/*  <ProfileDetail
              image={userData.image}
              textFirst={userData.name}
              point={userData.point}
              textSecond={userData.address}
              textThird={userData.id}
              onPress={() => navigation.navigate('ProfileExanple')}
            /> */}
            {/*   <ProfilePerformance
              data={userData.performance}
              style={{marginTop: 20, marginBottom: 20}}
            /> */}
            {/* <Avatar
                rounded
                size="xlarge"
                source={
                  image == null
                    ? require("../../assets/images/Troyanito.png")
                    : {
                        uri: image,
                      }
                }
                showEditButton={image == null ? false : true} 
                showEditButton={true}
                editButton={{ name: "pencil", type: "evilicon", color: "#fff" }}
                onEditPress={() => _pickImage()}
                onPress={() => _pickImage()}
                activeOpacity={1}
                imageProps={{ resizeMode: "contain" }}
                containerStyle={{ alignSelf: "center", marginBottom: 20 }}
              />  */}
            <UserAvatar
              size={100}
              style={{margin: 20, backgroundColor: 'transparent'}}
              name="Ash Ketchum"
              src="https://dummyimage.com/100x100/000/fff"
            />
            <Text style={styles.textLabel}>{'Nombre completo: '}</Text>
            <TextInput
              editable={false}
              style={{
                borderRadius: 10,
                width: '90%',
                height: 40,
                borderWidth: 1,
                alignSelf: 'center',
                marginVertical: 10,

                padding: 5,
              }}
              placeholder={'Ash Ketchum'}
              value={fullName}
              onChangeText={text => {
                setFullName(text);
              }}
              onSubmitEditing={() => {
                secondTextInput.current.focus();
              }}></TextInput>
            <Text style={styles.textLabel}>{'Fecha de nacimiento: '}</Text>
            <TextInput
              editable={false}
              ref={secondTextInput}
              style={{
                borderRadius: 10,
                width: '90%',
                height: 40,
                borderWidth: 1,
                alignSelf: 'center',
                marginVertical: 10,

                padding: 5,
              }}
              placeholder={'YYYY-MM-DD'}
              value={birthdate}
              onChangeText={text => {
                setBirthdate(text);
              }}></TextInput>
          </View>
        </ScrollView>
        <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
          <Button
            title={'Limpiar Caché'}
            loading={loading}
            onPress={() => userLogout()}
            color={'#9ECF8D'}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentTitle: {
    alignItems: 'flex-start',
    width: '100%',
    height: 32,
    justifyContent: 'center',
  },
  contain: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    height: 56,
    backgroundColor: '#f1fdf1',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  profileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  imageStyle: {
    width: '100%',
    height: 250,
  },
});
