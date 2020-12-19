import React, { useState } from 'react'
import {
    Text,
    View
} from "react-native";
import { Button } from 'react-native-paper';
import Component from './Component';


function ComponentsScreen2() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

            <Component />
            <Component />


        </View>
    )
}

export default ComponentsScreen2
