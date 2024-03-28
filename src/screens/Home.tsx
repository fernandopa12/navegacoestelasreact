import React from "react"
import { View,Text, Button } from "react-native"

export default ({navigation})=>{

    function irLogin(){
        navigation.navigate('Login')
    }

    return(

    <View style={{flex:1,backgroundColor:'#808080'}}>
        <Text>Tela HOME</Text>
        <Button title="IR PARA LOGIN" onPress={irLogin}/>
    </View>
    )
}