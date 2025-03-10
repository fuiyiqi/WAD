import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen.js';
import AnimalScreen from './screen/AnimalScreen.js';

const Stack = createStackNavigator();

//export default class App extends Component{
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'HomeScreen', ...styles}}
        />
        <Stack.Screen name="Animal" component={AnimalScreen} options={styles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#ffffffff',
  headerTitleStyle: {
    //fontWeight: 'bold',
    fontFamily: 'Anta-Regular',
  },
});

export default App;
