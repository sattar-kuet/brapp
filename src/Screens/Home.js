import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View,FlatList, Image, ScrollView,ActivityIndicator } from 'react-native'
import UserInfoBox from '../Components/UserInfoBox'
import UserInfoList from '../Components/UserInfoList'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import HomeHeader from '../Components/HomeHeader'

const Home = ({navigation}) => {
    const [userList, setuserList] = useState([])
    const [userRecent, setUserRecent] = useState([])
    const [loader, setloader] = useState(false)
    useEffect(() => {
        getAllEmployess()
    }, [])
    const getAllEmployess = async () => {
        setloader(true)
		try {
			const res = await fetch(`http://brapp.amardelivery.com/api/v2/getEmployee`, {
				method: 'POST',
				body: '',
			})
			const json = await res.json()
            setloader(false)
			if (json) {
                let data = json.data.reverse();
                setUserRecent(data)
                setuserList(data)
			} 
		} catch (error) {
            setloader(false)
            console.log(error)
		} 
	}
    return (
        <View style={{flex:1,backgroundColor:'#2c75b9'}}>
            <HomeHeader navi={navigation}></HomeHeader>
            <ScrollView>
            {loader == true && <ActivityIndicator size="small" color="#fff"></ActivityIndicator>}
            <Text style={[styles.head,{marginTop:20}]}>Recent</Text>
             <View style={{marginVertical:20,width:'95%',alignSelf:'center'}}>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={userList}
                    
                    renderItem={({ item,index })=>{
                    return (<UserInfoBox navi={navigation} key={item.id} source={item}></UserInfoBox>)
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    />
            </View>
            <Text style={styles.head}>See All</Text>
            <View>
                <FlatList 
                    data={userRecent} 
                    renderItem={({ item,index })=>{
                    return (<UserInfoList navi={navigation} key={item.id} source={item}></UserInfoList>)
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    />
            </View>
            </ScrollView>
           
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    infoBox:{
        width:wp('80%'),
        height:hp('25%'),
        backgroundColor:'#fff',
        alignSelf:'center',
        elevation:3,
        borderRadius:30,
        paddingHorizontal:wp('3%'),
        justifyContent:'center',
        marginTop:'-5%'
    
    },
    fcp:{
        color:'#274B8A',
        alignSelf:'center',
        fontSize:hp('3%')
    },
    conTactrow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5
    },
    contactInfopText:{
        color:'#274B8A',
        fontSize:hp('2%'),
        fontWeight:'bold',
        marginHorizontal:wp('3%')
    },
    purpleCircle:{
        width:wp('43%'),
        backgroundColor:'#1d67c3',
        height:wp('43%'),
        borderRadius:wp('150%'),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        elevation:6,
        alignSelf:'center'
    },
    head:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:hp('2.3%'),
        marginLeft:10
    }
})
