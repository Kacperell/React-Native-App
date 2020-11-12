import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

import { Gyroscope } from 'expo-sensors';



export default function AccelerometerScreen() {


    const [data, setData] = useState({});

    let subscription = null;

    useEffect(() => {
        toggle();

    }, []);

    useEffect(() => {
        return () => {
            unsubscribe();
        };
    }, []);

    const toggle = () => {
        if (subscription) {
            unsubscribe();
        } else {
            subscribe();
            slow();
        }
    };

    const slow = () => {
        Accelerometer.setUpdateInterval(400);
        // Accelerometer.setUpdateInterval(1000);
    };

    const fast = () => {
        Accelerometer.setUpdateInterval(16);
    };

    const subscribe = () => {
        subscription = Accelerometer.addListener(accelerometerData => {
            setData(accelerometerData);
        });
    };

    const unsubscribe = () => {
        subscription.remove();
        //  subscription = null;
    };

    let { x, y, z } = data;


    return (
        <View className='accelerometer' style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text >
                Accelerometer : [ {round(x)}, {round(y)}, {round(z)} ]
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