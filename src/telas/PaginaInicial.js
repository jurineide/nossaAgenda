import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import imglaranja from "../img/3.png"

export function PaginaInicial() {
    return (
        <View style={estilos.fundo}>
            <Text style={estilos.saudacao}>Olá!</Text>
            <Image source={imglaranja} style={estilos.logo} />

            <TouchableOpacity style={estilos.botao}>
                <Text style={estilos.texto}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botao}>
                <Text style={estilos.texto}>Cadastro</Text>
            </TouchableOpacity>
        </View>
    );
};
const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#f3c27b",
        alignItems: "center"
    },
    saudacao: {
        fontSize: 35,
        fontFamily: "Quicksand-Bold",
        color: "#000000",
        textAlign: "center",
        marginTop: 90
    },
    logo: {
        width: 400,
        height: 400
    },
    botao: {
        backgroundColor: "#ff9696",
        width: 225,
        height: 50,
        borderRadius: 20,
        marginBottom: 70,
    },
    texto: {
        fontSize: 25,
        fontFamily: "Quicksand-Bold",
        color: "#000000",
        textAlign: "center",
        paddingTop: 5
    }
});