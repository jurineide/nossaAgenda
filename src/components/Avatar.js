import React from "react";
import foto from "../img/giovanna.jpg";
import { View,Text,Image, StyleSheet } from "react-native";

export function Avatar (){
    return (
        <View style={estilos.avatar}>                   
            <Image  source={foto} style={estilos.foto}/>   
            <Text style={estilos.nome}> Giovanna </Text >    
        </View>
    )    
};
const estilos=StyleSheet.create({
    foto:{
        width:158,
        height:170,
        borderRadius:100
    },
    nome:{
        fontSize:25,
        color:"#282828", 
        fontFamily:"quicksand"   
    },
    avatar:{
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop:40,
        backgroundColor:"#ffffff",
    }
})