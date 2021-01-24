import React, { useState, useEffect } from 'react'
import { Image, View, Text, Platform } from "react-native";

import { Button } from 'react-native-paper';
;
import * as ImagePicker from "expo-image-picker";

function CameraScreen() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    // we need camera roll permissions to make this work
                    alert('Error');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync();
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View className='Camera' style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            {image && <Image source={{ uri: image }} style={{ alignSelf: 'stretch', height: 500, marginBottom: 10 }} />}
            <Button
                mode="contained"
                onPress={pickImage}>
                <Text style={{ color: 'white' }}>Zrób zdjęcie</Text>

            </Button>

        </View>
    )
}

export default CameraScreen
