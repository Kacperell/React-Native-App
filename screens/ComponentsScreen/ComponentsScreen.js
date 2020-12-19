import React, { useState } from 'react'
import {
    Text,
    View
} from "react-native";
import { Button } from 'react-native-paper';
import Component from './Component';


function ComponentsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

            <Component />
            <Button
                mode="contained"
                onPress={() => navigation.navigate('ComponentsScreen2')}   >
                <Text style={{ color: 'white' }}>  Komponenty drugi ekran</Text>
            </Button>

        </View>
    )
}

export default ComponentsScreen
