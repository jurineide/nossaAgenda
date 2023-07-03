import React from "react";
import { Topo } from "../components/Topo";
import { Avatar } from "../components/Avatar";
import { Menu } from "../components/Menu";
import { StyleSheet, View } from "react-native";

export function PerfilResp(){
    return <View style={estilos.tela}>
    <Topo/>
    <Avatar/>
    <Menu/>
    </View>
};
const estilos=StyleSheet.create({
    tela:{
        backgroundColor:"#ffffff"
    }
})