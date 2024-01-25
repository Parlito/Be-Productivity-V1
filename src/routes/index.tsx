import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Formu from '../screens/Formu';

function Routes() {

  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator 
      initialRouteName="home"
      screenOptions={{headerShown: false}}
      >
        <Screen name='home' component={Home}/>
        <Screen name='formu' component={Formu}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes