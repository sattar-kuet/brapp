import React,{useContext,useState} from 'react'
import { View, StyleSheet, TouchableOpacity,Image,Text,Alert,Linking  } from 'react-native'
import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem
} from '@react-navigation/drawer'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
function CustomDrawer(props) {
	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>

				<DrawerItemList {...props} />
			
        
			</DrawerContentScrollView>
			<View
          style={{
              marginBottom: 30,
              justifyContent: 'center',

            }}>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
            }}>
            Developed by:
          </Text>
          <TouchableOpacity
            style={{
              marginBottom: 'auto',
			  alignSelf:'center'
            }}
            onPress={() => {
              Linking.openURL('https://advancedict.com.bd');
            }}>
            <Text style={{color: '#78A3E8'}}>{'\n'} Advanced ICT & Infrastructure Ltd</Text>
          </TouchableOpacity>
        </View>
		</View>
	)
}

const styles = StyleSheet.create({
	row:{
		flexDirection:'row',
		justifyContent:'space-between',
	},
	textlabel:{
        fontFamily:'Inter-Regular',
        color:'#000',
        fontSize:16,
		marginLeft:35
    },
	login:{
		color:'#fff',
		fontSize:hp('2.0%')
	},
	subText:{
	
		fontSize:hp('1.5%')
	},
	imag:{
		width:wp('8%'),
		height:wp('6%'),
		resizeMode:'contain'
	}
})

export default CustomDrawer
