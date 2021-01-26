import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet,Button} from 'react-native';

export default function CalculatorSpeed() {
    const [distance, setDistance] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [resultado, setResultado] = useState(0);

    const Calculation = () =>  {
        console.log(distance, hours, minutes);

        const dist = parseFloat(distance);
        const hour = parseFloat(hours) * 60;
        const minute = parseFloat(minutes);
        const second = parseFloat(seconds) / 60;

        let time = hour + minute + second;

        let calculation = ((time/dist)).toFixed(2);
        const str1 = calculation.toString();
        const splitted = str1.split('.');

        let int  = parseFloat(splitted[0]);
        let decimal = parseFloat(splitted[1]);

        let dec = ((decimal*6)/10).toFixed(0);

        const partInt = int.toString();
        const partDec = dec.toString();

        let result_value = partInt + 'min e ' + partDec + 'seg por km';

        const final = setResultado(result_value);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Seu tempo por km</Text>

            <Text style={styles.h2}>Quanto você percorreu em km?</Text>

            <TextInput
                keyboardType={'numeric'}
                onChangeText={(value) => {setDistance(value)}}
                style={styles.input}
                textAlign={'center'}
                fontWeight='bold'
                fontSize={22}
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

            <Text style={styles.h2}>Qtd de segundos</Text>

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
        marginHorizontal: 15,
    },

    h2: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#0c1f38',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '4%',
        marginBottom: '2%',
    },

    input: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#e65401',
        color: 'white',
        marginBottom: '2%',
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