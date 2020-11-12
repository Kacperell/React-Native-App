import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

import { Gyroscope } from 'expo-sensors';



export default function AccelerometerScreen() {


    const [dataAccelerometer, setDataAccelerometer] = useState({});
    const [dataGyroscope, setDataGyroscope] = useState({});

    let subscriptionAccelerometer = null;
    let subscriptionGyroscope = null;

    useEffect(() => {
        subscribeAccelerometer();
        subscribeGyroscope();
    }, []);



    const subscribeAccelerometer = () => {
        subscriptionAccelerometer = Accelerometer.addListener(accelerometerData => {
            setDataAccelerometer(accelerometerData);
        });
        Accelerometer.setUpdateInterval(200);
    };
    const subscribeGyroscope = () => {
        subscriptionGyroscope = Gyroscope.addListener(gyroscopeData => {
            setDataGyroscope(gyroscopeData);
        });
        Gyroscope.setUpdateInterval(200);
    };



    return (
        <View className='accelerometer' style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginBottom: 15 }}>
                Accelerometer : [ {round(dataAccelerometer.x)}, {round(dataAccelerometer.y)}, {round(dataAccelerometer.z)} ]
            </Text>
            <Text >
                Gyroscope : [ {round(dataGyroscope.x)}, {round(dataGyroscope.y)}, {round(dataGyroscope.z)} ]
            </Text>
        </View>


    )
}



function round(n) {
    if (!n) {
        return 0;
    }
    return Math.floor(n * 100) / 100;
}