import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Footer () {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Criado por Sergio Neto (2021)</Text>
        </View>
    )
} 

const styles = StyleSheet.create ({
    main: {
        flex: 0.03,
        backgroundColor: '#0c1f38',
        alignItems: 'center',
        color: 'white',
        
    },

    text: {
        alignItems: 'center',
        color: 'white',
        justifyContent: 'center',
        fontWeight: 'bold',
        
    },
})