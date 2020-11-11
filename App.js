
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import Home from './screens/Home';
// import FormWithDateSaving from './screens/FormWithDateSaving/FormWithDateSaving';
import screens from './screensArray';

// import { Buffer } from 'buffer';
// global.Buffer = Buffer;

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

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


        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
