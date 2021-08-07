import React from 'react'
import { Image, StyleSheet, Text, View,Pressable,TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'


const HomeHeader = ({navi}) => {
    const [term, setTerm] = React.useState('')
    return (
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:10}}>
            <View style={{flexDirection:'column',width:'10%',justifyContent:'center'}}>
    
            <Ionicons onPress={()=>navi.toggleDrawer()} size={hp('5%')} color="#fff" name="ios-menu" style={{alignSelf:'center'}}></Ionicons>
            </View>
            
            <View style={{flexDirection:'column',width:'90%',paddingHorizontal:10}}>
            <View>
           
                <TextInput 
                placeholder="Search Employees Here" 
                placeholderTextColor="#000" 
                onChangeText={(text)=>{
                    setTerm(text)
                }}
                onSubmitEditing={(text)=>{
                    if(term.length > 0){
                        navi.navigate('Search',{term:term})
                    }
                }}
                style={styles.input} ></TextInput>
            
            </View>
                {/* <Pressable onPress={()=>navi.navigate('Search')} style={styles.input}>
                    <AntDesign size={hp('2%')} name="search1" color="#274B8A"></AntDesign>
                    <Text style={{color:'#274B8A'}}>Search Employee</Text>
                </Pressable> */}
            </View>
            {/* <View style={{flexDirection:'column',width:'15%'}}>
                <Ionicons size={hp('4%')} color="#274B8A" name="person-sharp" style={{alignSelf:'center'}}></Ionicons>
            </View> */}
            

        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    input:{
        flexDirection:'row',
        height:hp('5%'),
        borderWidth:1,
        borderColor:'#274B8A',
        backgroundColor:'#fff',
        alignItems:'center',
        paddingHorizontal:10,
        borderRadius:5
    }
})
