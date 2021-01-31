import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button} from 'react-native';


export default function CalculatorSpeed() {
    const [distance, setDistance] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [resultado, setResultado] = useState(0);

    const Calculation = () =>  {
        console.log(distance, hours, minutes);

        let dist = parseFloat(distance);

        if (isNaN(dist)) {
            let dist = 0;
        };

        let hour = parseFloat(hours) * 60;

        if (isNaN(hour)) {
            hour = 0;
        };

        let minute = parseFloat(minutes);

        if (isNaN(minute)) {
            minute = 0;
        };

        console.log(dist, hour, minute);

        let time = hour + minute;

        let result = ((dist/time) * 60).toFixed(2);

        const result_str = result.toString();

        let result_value = result_str + ' (km/h)';

        const final = setResultado(result_value);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Sua Velocidade</Text>

            <Text style={styles.h2}>Quanto você percorreu em km?</Text>

            <TextInput
                keyboardType={'numeric'}
                onChangeText={(value) => {setDistance(value)}}
                style={styles.input}
                textAlign={'center'}
                fontWeight='bold'
                fontSize={22}
                borderRadius= {10}
                borderWidth= {1}
                
            >
            </TextInput>

            <Text style={styles.h1}>Em quanto tempo?</Text>

            <Text style={styles.h2}>Qtd de horas</Text>

            <TextInput
                keyboardType={'numeric'}
                onChangeText={(value) => {setHours(value)}}
                style={styles.input}
                textAlign={'center'}
                fontWeight='bold'
                fontSize={22}
            >
            </TextInput>

            <Text style={styles.h2}>Qtd de minutos</Text>

            <TextInput
                keyboardType={'numeric'}
                onChangeText={(value) => {setMinutes(value)}}
                style={styles.input}
                textAlign={'center'}
                fontWeight='bold'
                fontSize={22}
            >
            </TextInput>

            <Text style={styles.h2}>Seu Resultado: </Text>

            <Text style={styles.h1}>{resultado}</Text>

            <Button
                color= '#0c1f38'
                title='Calcular'
                onPress={Calculation}
            >
            </Button>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a7e0d7',
    },

    h1: {
        alignContent: 'center',
        alignItems: 'center',
        color: '#0c1f38',
        fontSize: 30,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginHorizontal: 20,
    },

    h2: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0c1f38',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '6%',
        marginBottom: '2%',
    },

    input: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#e65401',
        color: 'white',
        marginBottom: '4%',
        height: 40,
        width: 80,
        borderRadius:10,
        borderWidth:1,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0c1f38',
        fontSize: 12,
        fontWeight: 'bold',
        height: 10,
    },
    
})
