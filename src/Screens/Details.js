import React from 'react'
import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import CallMsgBox from '../Components/CallMsgBox'
const Details = ({route,navigation}) => {
    const {data} = route.params;
    return ( 
        <View style={{flex:1,backgroundColor:'#2c75b9'}}>
            <View style={{height:50,paddingHorizontal:10}}>
                <MCI onPress={()=>navigation.goBack()} color="#fff" name="keyboard-backspace" size={40}></MCI>
            </View>
            <ScrollView>
            <View style={{marginTop:hp('20%')}}>
                <View style={styles.infoBox}>
                <View style={{flexDirection:'row'}}>
                    <Image style={{
                        width:wp('20%'), 
                        height:wp('20%'),
                        resizeMode:'contain',
                       alignSelf:'center',
                       marginVertical:10
                    
                    }} source={require('../Assets/avatar.png')}></Image>
                    </View>
                    <Text style={[styles.fcp,{fontSize:hp('3%'),fontWeight:'bold',textAlign:'left',color:'#ff3728'}]}>{data.designation}</Text>
                    {data.cell.length != '' && data.cell.split(",").map((item,index)=>{
                        return (<CallMsgBox msg={true} label="Cell Phone" numb={item}></CallMsgBox>)
                    })}
                    {data.tnt_office.length != '' && data.tnt_office.split(",").map((item,index)=>{
                        return (<CallMsgBox label="T&T | Office" numb={item}></CallMsgBox>)
                    })}
                 {data.tnt_home.length != '' && data.tnt_home.split(",").map((item,index)=>{
                        return (<CallMsgBox label="T&T | Home" numb={item}></CallMsgBox>)
                    })}
                     {data.m_home.length != '' && data.m_home.split(",").map((item,index)=>{
                        return (<CallMsgBox label="M-CentreX | Home" numb={item}></CallMsgBox>)
                    })}
                    {data.m_office.length != '' && data.m_office.split(",").map((item,index)=>{
                        return (<CallMsgBox label="M-CentreX | Office" numb={item}></CallMsgBox>)
                    })}
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    infoBox:{
        width:wp('80%'),
        minHeight:hp('25%'),
        backgroundColor:'#fff',
        alignSelf:'center',
        elevation:3,
        borderRadius:30,
        paddingHorizontal:wp('3%'),
        justifyContent:'center',
        marginTop:'-15%',
        paddingVertical:'5%'
    },
    fcp:{
        color:'#274B8A',
        fontSize:hp('3%')
    },
    purpleCircle:{
        width:wp('43%'),
        backgroundColor:'#fff',
        height:wp('43%'),
        borderRadius:wp('150%'),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        elevation:6,
        alignSelf:'center'
    },
    head:{
        color:'#274B8A',
        fontWeight:'bold',
        fontSize:hp('2.3%'),
        marginLeft:10
    },
    
})
