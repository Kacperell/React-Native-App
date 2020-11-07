import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';



export default function Home({ navigation }) {

    const screns = [
        { name: 'FormWithDateSaving', text: 'Formularz z zapisem do bazy' },
        { name: 'FormWithDateSaving', text: 'Formularz z zapisem do bazy' },
        { name: 'FormWithDateSaving', text: 'Formularz z zapisem do bazy' },
    ];

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />

            <FlatList data={screns} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate(item.name)} >

                    <Text>{item.text}</Text>

                </TouchableOpacity>
            )} />
        </View>
    );
}
