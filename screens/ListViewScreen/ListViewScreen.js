import React from "react";
import { View, FlatList, Text, Image } from 'react-native';

export default function ListViewScreen() {
    const listElements = [
        [
            require('../../assets/imgexample.jpg'),
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        [
            require('../../assets/imgexample.jpg'),
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        [
            require('../../assets/imgexample.jpg'),
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        [
            require('../../assets/imgexample.jpg'),
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        [
            require('../../assets/imgexample.jpg'),
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        [
            require('../../assets/imgexample.jpg'),
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        [
            require('../../assets/imgexample.jpg'),
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        [
            require('../../assets/imgexample.jpg'),
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        [
            require('../../assets/imgexample.jpg'),
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        [
            require('../../assets/imgexample.jpg'),
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
    ]
    return (
        <View className="listViewScreen" style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
            <FlatList data={listElements} renderItem={({ item, i }) => (
                <View key={i} style={{ padding: 10, paddingLeft: 50, paddingRight: 50, flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={item[0]} style={{ padding: 5, marginRight: 5, width: 75, height: 75 }} />
                    <Text >{item[1]}</Text>
                </View>
            )} />
        </View>
    )
}


