import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home'
import Drawernavigator from './src/Components/Drawernavigator'

const App = () => {
  const Stack = createNativeStackNavigator();

  return ( <NavigationContainer>
       <Drawernavigator></Drawernavigator>
    {/* <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Details" component={Details} />
   </Stack.Navigator> */}
    
 </NavigationContainer>);
};
  
export default App;  