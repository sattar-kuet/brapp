import React from 'react'
import { Image, Pressable, StyleSheet, Text, View,androidr } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const UserInfoBox = ({navi,source}) => {
    return (
        <Pressable onPress={()=>navi.navigate('Details',{data:source})}>
           <View style={styles.imageBox}>
           <Image  style={{alignSelf:'center',width:wp('15%'),height:wp('15%')}} source={require('../Assets/avatar.png')}></Image>
            {/* <Text style={[styles.textPurp,{marginTop:15}]}>Md. Selim Raja</Text> */}
            <Text style={[styles.textPurp,{fontWeight:'bold'}]}>{source.designation}</Text>
            <Text style={styles.textPurp}>{source.cell}</Text>
 
           </View> 
        </Pressable>
    )
} 

export default UserInfoBox

const styles = StyleSheet.create({
    imageBox:{
        width:wp('35%'),
        minHeight:hp('18%'),
        marginHorizontal:5,
        backgroundColor:'#fff',
        elevation:5,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,

    },
    textPurp:{
        color:'#274B8A',
        fontSize:hp('2.1%')
    }
})
