import React,{useState,useContext} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MCI from 'react-native-vector-icons/AntDesign'
import { View, StyleSheet,Text } from 'react-native'
import Home from '../Screens/Home'
import CustomDrawer from './DrawerContent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Details from '../Screens/Details'
import Search from '../Screens/Search'

const Drawer = createDrawerNavigator()  
const Stack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
		<Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    );
  }

const DrawerNavigator = () => {
	return ( 
		<Drawer.Navigator  
			drawerContentOptions={{ 
				activeTintColor: '#D0D8F2',
				inactiveTintColor: '#D0D8F2',
                activeBackgroundColor:'#D0D8F2',
				labelStyle: {
					fontSize: 16, 
				},
			}}
         
			drawerContent={(props) => <CustomDrawer {...props} />}>
				<Drawer.Screen
                
				options={{
					drawerIcon: ({ focused, color }) => {
						return <MCI size={30} color="#000" name="home"></MCI>
					},
					drawerLabel: ({ focused, color }) => {
						return <Text style={[styles.textdrawer]}>Home </Text>
					},
                    headerShown:false
				}}
				
				name="Home"
				component={HomeStackScreen} 
			/>
			
		</Drawer.Navigator>
	)
}
const styles = StyleSheet.create({
	textdrawer:{
        color:'#000',
        fontSize:16
    },
	imag:{
		width:wp('8%'),
		height:wp('6%'),
		resizeMode:'contain'
	}
})
export default DrawerNavigator
