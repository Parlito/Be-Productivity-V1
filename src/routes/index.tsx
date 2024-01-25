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
      >
        <Screen name='home' component={Home} options={{headerShown: false}}/>
        <Screen name='formu' component={Formu}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes