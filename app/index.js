import React from 'react';
import {Provider} from 'react-redux';
//import {PersistGate} from 'redux-persist/integration/react';
import Navigator from './navigation';
import ShopContextProvider from './context/ShopContext';
import store from './redux/store';

console.disableYellowBox = true;

export default function App() {
  return (
    <ShopContextProvider>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </ShopContextProvider>
  );
}
