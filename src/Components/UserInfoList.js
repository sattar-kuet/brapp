import React from 'react'
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View ,Linking} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FA from 'react-native-vector-icons/FontAwesome'

const UserInfoBox = ({navi,source}) => {
    return ( 
        <Pressable onPress={()=>navi.navigate('Details',{data:source})} style={styles.imageBox}>
            <View style={{flexDirection:'column',width:'15%'}}>
                <Image style={{alignSelf:'center',width:wp('12%'),height:wp('12%'),resizeMode:'contain'}} source={require('../Assets/avatar.png')}></Image>
            </View>
           <View style={{flexDirection:'column',width:'85%'}}>
                <Text style={[styles.textPurp,{marginLeft:5,fontWeight:'bold'}]}>{source.designation}</Text>
                <View style={{flexDirection:'row'}}>
                    {/* <Image style={{width:wp('5%'),height:wp('5%'),resizeMode:'contain'}} source={require('../Assets/gmail.png')}></Image> */}
                    {/* <Text style={styles.textPurp}>test@gmail.com</Text> */}
                    {/* <FA size={hp('3%')} name="phone" color="#000"></FA> */}
                    <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${source.cell}`)
                                }}>
                                <Text style={[styles.textPurp,{marginHorizontal:5}]}>{source.cell}</Text>
                    </TouchableOpacity>
                    
                </View>
               
           </View>
        </Pressable>
    )
}

export default UserInfoBox

const styles = StyleSheet.create({
    imageBox:{
        width:wp('95%'),
        minHeight:hp('10%'),
        marginHorizontal:5,
        backgroundColor:'#fff',
        marginVertical:10,
        flexDirection:'row',
        borderRadius:5,
        alignSelf:'center',
        alignItems:'center',
        paddingHorizontal:10
    },
    textPurp:{
        color:'#274B8A',
        fontSize:hp('2.1%')
    }
})
