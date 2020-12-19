import React, { useState } from 'react'
import {
    Text,
    View,
    Image
} from "react-native";
import { Button } from 'react-native-paper';

function Component() {
    return (
        <View style={{ padding: 10 }}>
            <Text>
                Komponent
         </Text>
            <Image source={require('../../assets/imgexample.jpg')} style={{ padding: 5, marginRight: 5, width: 150, height: 150 }} />
        </View>
    )
}

export default Component
