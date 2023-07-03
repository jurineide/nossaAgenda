import React from "react";
import { StyleSheet, View, Image, Text} from "react-native";
import next from "../img/exit.png";


export function Topo(){
    return (
        <View style={estilos.topo}>           
            <Text style={estilos.texto}> Meu perfil </Text >  
            <Image style={estilos.imagem} source={next}/>      
        </View>
        
    )        
};

const estilos=StyleSheet.create({    
    topo:{        
        backgroundColor:"#ffffff",
        padding:10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height:50,
    },
    imagem:{
        width:30,
        height:28,                
    },
    texto:{
       fontSize:20,
    }    
})