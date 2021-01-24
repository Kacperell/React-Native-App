import React from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import screens from '../screensArray';
export default function Home({ navigation }) {

    return (
        <View style={{ flex: 1 }}>

            <FlatList data={screens} renderItem={({ item, i }) => (

                <TouchableOpacity
                    style={{ marginTop: 20 }}
                    key={i} onPress={() => navigation.navigate(item.name)} >

                    <Text style={{ fontWeight: 'bold', padding: 3 }}>{item.text}</Text>

                </TouchableOpacity>
            )} />

        </View>
    );
}
