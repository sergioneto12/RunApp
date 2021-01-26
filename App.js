import { StatusBar } from 'expo-status-bar';

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/components/Home';
import CalculatorPace from './src/components/CalculatorPace';
import CalculatorSpeed from './src/components/CalculatorSpeed';
import Footer from './src/components/Footer';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>

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

        <Footer/>
    </NavigationContainer>

    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
