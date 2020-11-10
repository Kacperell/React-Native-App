import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import screens from '../screensArray';
export default function Home({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <FlatList data={screens} renderItem={({ item, i }) => (

                <TouchableOpacity key={i} onPress={() => navigation.navigate(item.name)} >

                    <Text>{item.text}</Text>

                </TouchableOpacity>
            )} />

        </View>
    );
}
