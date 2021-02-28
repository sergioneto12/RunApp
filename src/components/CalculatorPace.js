import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function CalculatorSpeed() {
    let [distance, setDistance] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
    let [resultado, setResultado] = useState(0);

    const Calculation = () =>  {

        console.log(distance, hours, minutes, seconds);

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

        let second = parseFloat(seconds) / 60;

        if (isNaN(second)) {
            second = 0;
        };

        console.log(dist, hour, minute, second);

        let time = hour + minute + second;

        let calculation = ((time/dist)).toFixed(2);
        const str1 = calculation.toString();
        const splitted = str1.split('.');

        let int  = parseFloat(splitted[0]);
        let decimal = parseFloat(splitted[1]);

        let dec = ((decimal*6)/10).toFixed(0);

        let partInt = int.toString();
        let partDec = dec.toString();

        let result_value = partInt + 'min e ' + partDec + 'seg por km';

        let final = setResultado(result_value);   
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Seu Pace</Text>

            <Text style={styles.h2}>Distância (km)</Text>

            <TextInput
                keyboardType={'numeric'}
                onChangeText={(value) => {setDistance(value)}}
                style={styles.input}
                textAlign={'center'}
                fontWeight='bold'
                fontSize={22}
            >
            </TextInput>

            <Text style={styles.h1}>Tempo</Text>

            <Text style={styles.h2}>Horas</Text>

            <TextInput
                keyboardType={'numeric'}
                onChangeText={(value) => {setHours(value)}}
                style={styles.input}
                textAlign={'center'}
                fontWeight='bold'
                fontSize={22}
            >
            </TextInput>

            <Text style={styles.h2}>Minutos</Text>

            <TextInput
                keyboardType={'numeric'}
                onChangeText={(value) => {setMinutes(value)}}
                style={styles.input}
                textAlign={'center'}
                fontWeight='bold'
                fontSize={22}
            >
            </TextInput>

            <Text style={styles.h2}>Segundos</Text>

            <TextInput
                keyboardType={'numeric'}
                onChangeText={(value) => {setSeconds(value)}}
                style={styles.input}
                textAlign={'center'}
                fontWeight='bold'
                fontSize={22}
            >
            </TextInput>

            <Text style={styles.h2}>Seu Resultado: </Text>

            <Text style={styles.h1}>{resultado}</Text>

            <TouchableOpacity
                
                onPress={Calculation}
                style={styles.button}
            >
                <Text style={styles.btext}>Calcular</Text>
            </TouchableOpacity>

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
        backgroundColor: '#e65401',
    },

    h1: {
        alignContent: 'center',
        alignItems: 'center',
        color: '#0c1f38',
        fontSize: 30,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginBottom: '2%',
    },

    h2: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0c1f38',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '1%',
        marginBottom: '2%',
    },

    input: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        color: 'black',
        marginBottom: '5%',
        height: 40,
        width: 100,
        borderRadius: 10,
        borderWidth: 1,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0c1f38',
        borderRadius: 15,
        height: 50,
        width: 110,
        
    },

    btext: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    
})