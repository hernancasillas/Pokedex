import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome5';
/* import {BaseColor, useTheme, useFont} from '@config';
import {useTranslation} from 'react-i18next';
import {Icon} from '@components'; */
/* Stack Screen */
/* import Profile1 from '@screens/Profile1';
import Profile2 from '@screens/Profile2';
import Profile3 from '@screens/Profile3';
import Profile4 from '@screens/Profile4';
import Profile5 from '@screens/Profile5';
import Profile6 from '@screens/Profile6';
import Profile7 from '@screens/Profile7';
import Profile8 from '@screens/Profile8';
import More from '@screens/More';
import Tour from '@screens/Tour';
import Car from '@screens/Car';
import OverViewCar from '@screens/OverViewCar';
import Hotel from '@screens/Hotel';
import Review from '@screens/Review';
import Feedback from '@screens/Feedback';
import Messages from '@screens/Messages';
import Notification from '@screens/Notification';

import SignUp from '@screens/SignUp';
import SignIn from '@screens/SignIn';
import ResetPassword from '@screens/ResetPassword';
import ChangePassword from '@screens/ChangePassword';
import ProfileEdit from '@screens/ProfileEdit';
import ProfileExample from '@screens/ProfileExample';
import ChangeLanguage from '@screens/ChangeLanguage';
import HotelInformation from '@screens/HotelInformation';
import CheckOut from '@screens/CheckOut';
import Currency from '@screens/Currency';
import Coupons from '@screens/Coupons';
import HotelDetail from '@screens/HotelDetail';
import ContactUs from '@screens/ContactUs';
import PreviewBooking from '@screens/PreviewBooking';
import PricingTable from '@screens/PricingTable';
import PricingTableIcon from '@screens/PricingTableIcon';
import BookingDetail from '@screens/BookingDetail';
import PostDetail from '@screens/PostDetail';
import TourDetail from '@screens/TourDetail';
import CarDetail from '@screens/CarDetail';
import AboutUs from '@screens/AboutUs';
import OurService from '@screens/OurService';
import FlightSearch from '@screens/FlightSearch';
import SelectFlight from '@screens/SelectFlight';
import FlightResult from '@screens/FlightResult';
import FlightSummary from '@screens/FlightSummary';
import FlightTicket from '@screens/FlightTicket';
import CruiseSearch from '@screens/CruiseSearch';
import Cruise from '@screens/Cruise';
import CruiseDetail from '@screens/CruiseDetail';
import BusSearch from '@screens/BusSearch';
import BusList from '@screens/BusList';
import BusSelectSeat from '@screens/BusSelectSeat';
import PreviewBusBooking from '@screens/PreviewBusBooking';
import BusTicket from '@screens/BusTicket';
import Event from '@screens/Event';
import EventDetail from '@screens/EventDetail';
import EventPreviewBooking from '@screens/EventPreviewBooking';
import DashboardEvent from '@screens/DashboardEvent';
import EventTicket from '@screens/EventTicket';
import PaymentMethod from '@screens/PaymentMethod';
import MyPaymentMethod from '@screens/MyPaymentMethod';
import AddPayment from '@screens/AddPayment';
import PaymentMethodDetail from '@screens/PaymentMethodDetail';
import PreviewPayment from '@screens/PreviewPayment';
import Setting from '@screens/Setting';
import ThemeSetting from '@screens/ThemeSetting';
import NotFound from '@screens/NotFound';

import Home from '@screens/Home';
import Booking from '@screens/Booking';
import Messenger from '@screens/Messenger';
import Post from '@screens/Post';
 */

import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import AddPokemon from '../screens/AddPokemon';
import AddPokemonDetail from '../screens/AddPokemonDetail';
import PokemonDetail from '../screens/PokemonDetail';

const MainStack = createStackNavigator();
const HomeStack = createStackNavigator();
const PerfilStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Main() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BottomTabNavigator">
      <MainStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
    </MainStack.Navigator>
  );
}
const Inicio = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="AddPokemon" component={AddPokemon} />
      <HomeStack.Screen name="AddPokemonDetail" component={AddPokemonDetail} />
      <HomeStack.Screen name="PokemonDetail" component={PokemonDetail} />
    </HomeStack.Navigator>
  );
};
const PerfilStackk = () => {
  return (
    <PerfilStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Profile">
      <PerfilStack.Screen name="Profile" component={Profile} />
      <PerfilStack.Screen name="EditProfile" component={EditProfile} />
    </PerfilStack.Navigator>
  );
};

function BottomTabNavigator() {
  /* const {t} = useTranslation();
  const {colors} = useTheme();
  const font = useFont(); */

  return (
    <BottomTab.Navigator
      initialRouteName="Pokedex"
      screenOptions={{
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: '#9ECF8D',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 2,
        },
      }}>
      <BottomTab.Screen
        name="Pokedex"
        component={Inicio}
        options={{
          title: 'Pokedex',
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="home" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={PerfilStackk}
        options={{
          title: 'Perfil',
          tabBarIcon: ({color}) => {
            return <Icon solid color={color} name="user-circle" size={20} />;
          },
        }}
      />
      {/* <BottomTab.Screen
        name="Contador"
        component={() => null}
        listeners={() => ({
          tabPress: e => {
            e.preventDefault(); // Prevents navigation
            // Your code here for when you press the tab
          },
        })}
        options={{
          title: '20',
          tabBarIcon: ({color}) => {
            return <Icon solid color={color} name="user-circle" size={20} />;
          },
        }}
      /> */}
    </BottomTab.Navigator>
  );
}
