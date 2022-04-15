import * as React from 'react';
import { StyleSheet, View, ActivityIndicator, ScrollView } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';

import { useFonts } from 'expo-font';

import { Sriracha_400Regular } from '@expo-google-fonts/sriracha';
import { Questrial_400Regular } from '@expo-google-fonts/questrial';
import './css/main.js';


import CommonProvider from "./contexts/common";
import ProductsProvider from "./contexts/products";
import CartProvider from "./contexts/cart";

import HomeScreen from './screens/HomeScreen';
import Cart from './screens/Cart';
import Menu from './screens/Menu';
import Header from './components/Header';

export default function App() {
  
  let [fontsLoaded] = useFonts({ 
    Sriracha_400Regular, 
    Questrial_400Regular,
  });

  if (!fontsLoaded) { 
    return ( 
      <View style={styles.loadingContainer}> 
        <ActivityIndicator size='large' color='#F5C121' /> 
      </View> 
    ); 
  }
const Stack = createNativeStackNavigator(
);

  return (
    <SafeAreaProvider>
      <CommonProvider>
        <ProductsProvider>
          <CartProvider>
        <Header/>

        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ title: 'Menu' }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ title: 'Cart' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        
            </CartProvider>
        </ProductsProvider>

      </CommonProvider>

    </SafeAreaProvider>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    width: '414px',
    height: '896px'
  },

  
});
