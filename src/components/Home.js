import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';



export default function Home ({navigation}) {
    return (
        <View style={styles.main}>
            <ImageBackground
                source={require('../images/bgc.jpg')}
                style={{width: '100%', height: '100%'}}

            >
                <View style={styles.top}>
                    <Text style={styles.text1}>Bem-Vindo</Text>
                    <Text style={styles.text2}>Escolha uma das opções abaixo: </Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('CalculatorPace')}
                >
                    <Text style={styles.btext}>Calcular Pace</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('CalculatorSpeed')}
                >
                    <Text style={styles.btext}>Calcular Velocidade</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
} 

const styles = StyleSheet.create ({
    main: {
        flex: 1,
        backgroundColor: '#F78D02',
        alignContent: 'center',
        alignItems: 'center',
        
    },

    top: {
        borderColor: '#0c1f38',
        borderRadius:10,
        borderWidth: 4,
        alignItems: 'center',
        marginTop: '20%',
        marginHorizontal: '10%',
        paddingHorizontal: '1%',
        paddingVertical: '12%',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        
    },

    text1: {
        alignContent: 'center',
        alignItems: 'center',
        color: '#0c1f38',
        fontSize: 45,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },

    text2: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0c1f38',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0c1f38',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '15%',
    },

    btext: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0c1f38',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '8%',
        borderColor: '#0c1f38',
        borderBottomWidth: 4,

    },

    
})