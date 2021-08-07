import React from 'react'
import { StyleSheet, Text, View,Linking,TouchableOpacity } from 'react-native'
import FA from 'react-native-vector-icons/FontAwesome'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MI from 'react-native-vector-icons/MaterialIcons'

const CallMsgBox = ({label,numb,msg=false}) => {
    return (
        <View style={styles.conTactrow}>
                            <View>
                                <Text style={styles.contactInfopText}>{numb}</Text>
                            <Text style={styles.greyText}>{label}</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={()=>{
                                let numbd = numb.replace("#", "%23")
                                Linking.openURL(`tel:${numbd}`)
                                    }} style={[styles.circle]}>
                            <FA size={hp('3.2%')} name="phone" color="#fff"></FA>
                            </TouchableOpacity>
                           {msg == true && (
                                <TouchableOpacity onPress={()=>{Linking.openURL(`sms:${numb}`)
                            }} style={[styles.circle,styles.bacMsg]}>
                                <MI size={hp('3.2%')} name="messenger" color="#fff"></MI>
                                </TouchableOpacity>
                           )}
                            </View>
                           
                        </View>
    )
}

export default CallMsgBox

const styles = StyleSheet.create({
    contactInfopText:{
        color:'#274B8A',
        fontSize:hp('2.3%'),
        fontWeight:'bold',
        marginHorizontal:wp('1%')
    },
    circle:{
        width:wp('10%'),
        height:wp('10%'),
        backgroundColor:'#2196f3',
        borderRadius:150,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:3
    },
    conTactrow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5,
        borderBottomWidth:1,
        paddingVertical:5,
        borderBottomColor:'#dedede'
    },
    greyText:{
        color:'grey',
        fontSize:hp('1.5%'),
        marginHorizontal:wp('1.3%')
    },
    bacMsg:{
        backgroundColor:'#25ae88'
    }
})
