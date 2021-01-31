import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/components/Home';
import CalculatorPace from './src/components/CalculatorPace';
import CalculatorSpeed from './src/components/CalculatorSpeed';
import Footer from './src/components/Footer';

function SplashScreen({navigation}) {
    setTimeout(() => {
      navigation.replace('Home')
    }, 30000);

    return (
    <ImageBackground 
      style={{flex: 1}, {width: '100%'}, {height: '100%'}, {paddingTop: '200%'}}
      source={require('./assets/splash.jpg')}>
  
    </ImageBackground>
    
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={SplashScreen}>

        <Stack.Screen
            name='SplashScreen' 
            component={SplashScreen}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#a7e0d7',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackAccessibilityLabel: 'none',
            }}
        />

        <Stack.Screen 
          name='Home' 
          component={Home}
          options={{
            title: 'Calculadora de Corrida',
            headerStyle: {
              backgroundColor: '#0c1f38',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen 
        name='CalculatorSpeed' 
        component={CalculatorSpeed}
        options={{
          title: 'Velocidade',
          headerStyle: {
            backgroundColor: '#0c1f38',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />

        <Stack.Screen 
        name='CalculatorPace' 
        component={CalculatorPace} 
        options={{
          title: 'Pace',
          headerStyle: {
            backgroundColor: '#0c1f38',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />

        </Stack.Navigator>
 
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
