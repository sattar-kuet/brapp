import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View,FlatList, Image, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import UserInfoBox from '../Components/UserInfoBox'
import UserInfoList from '../Components/UserInfoList'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Zocial from 'react-native-vector-icons/Zocial'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'


const Home = ({route,navigation}) => {
    const [userRecent, setUserRecent] = useState([])
    const [loading, setLoading] = useState(false)
    const {term} = route.params;
    const [loader, setloader] = useState(false)

    useEffect(() => {
        getAllEmployess()
    }, [])
    const getAllEmployess = async () => {
        const formData = new FormData() 
        formData.append('search', term) 
        setLoading(true)
		try {
			const res = await fetch(`http://brapp.amardelivery.com/api/v2/getEmployee`, {
				method: 'POST',
				body: formData,
			})
			const json = await res.json()
            setLoading(false)
			if (json) {
                setUserRecent(json.data)
			} 
		} catch (error) {
            setLoading(false)
            console.log(error)
		} 
	}
    return (
        <View style={{flex:1,backgroundColor:'#2c75b9'}}>
            <View style={{height:50,paddingHorizontal:10}}>
                <MCI onPress={()=>navigation.goBack()} color="#fff" name="keyboard-backspace" size={40}></MCI>
            </View>
            <ScrollView>
            {loading == true && <ActivityIndicator size="small" color="#fff"></ActivityIndicator>}

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
})
