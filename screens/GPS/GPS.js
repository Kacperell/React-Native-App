import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';

function GPS() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Ładowanie..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        text = `Twoje współrzędne: ${location.coords.latitude},${location.coords.longitude}`
    }
    return (
        <View className='gps' style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{text}</Text>
        </View>
    )
}

export default GPS;


