
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import Home from './screens/Home';
import ComponentsScreen2 from './screens/ComponentsScreen/ComponentsScreen2';
import DataSharing2 from './screens/DataSharing/DataSharing2';

import screens from './screensArray';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#3498db',
  },
  button: {
    fontSize: 12,
    color: '#000',
    backgroundColor: '#fff'
  }
};

const Stack = createStackNavigator();
export default function App() {

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Home" component={Home}
            options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: '#1976d2',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}

          />


          {screens.map((screen, i) => (
            <Stack.Screen key={i} name={screen.name} options={{
              title: screen.text, headerStyle: {
                backgroundColor: '#1976d2',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} component={screen.component} />
          ))}



          <Stack.Screen name="ComponentsScreen2" component={ComponentsScreen2}
            options={{
              title: 'Komponenty ekran drugi',
              headerStyle: {
                backgroundColor: '#1976d2',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="DataSharing2" component={DataSharing2}
            // initialParams={{ number: 42 }}
            options={{
              title: 'Współdzielanie danych',
              headerStyle: {
                backgroundColor: '#1976d2',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />


        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
