import React from "react";
import { StyleSheet, View, Image, Text} from "react-native";
import volta from "../img/arrow.png";


export function TopoTarefa(){
    return (
        <View style={estilos.topo}>   
            <Image style={estilos.imagem} source={volta}/>         
            <Text style={estilos.texto}> Tarefas </Text >                   
        </View>
        
    )        
};

const estilos=StyleSheet.create({    
    topo:{ 
        padding:10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height:50,
    },
    imagem:{
        width:30,
        height:28,                
    },
    texto:{
       fontSize:20,
       fontFamily:"Quicksand-SemiBold"
    }    
})