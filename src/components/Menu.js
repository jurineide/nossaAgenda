import React from "react";
import { StyleSheet, TouchableOpacity,Text, View} from "react-native";


export function Menu(){
    return(
        <View style={estilos.botoes}>
        <TouchableOpacity style={estilos.botao}>
            <Text style={estilos.tarefa}>Tarefas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botao}>
            <Text style={estilos.tarefa}>Avaliação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botao}>
            <Text style={estilos.tarefa}>Pontuação</Text>
        </TouchableOpacity>
         </View>  
    )
};
const estilos=StyleSheet.create({
    botao:{       
        backgroundColor:"#f3c27b",
        width:225,
        height:50,
        borderRadius:8,
        marginBottom:60,
    },
    tarefa:{
        fontSize:25,
        

    },
    botoes:{
        paddingTop:90,               
        alignItems: "center",
        backgroundColor:"#ffffff"     
    }

}) 