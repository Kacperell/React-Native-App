import React, { useState } from 'react'
import {
    Text,
    View
} from "react-native";
import { Button } from 'react-native-paper';

function DataSharing({ navigation, route }) {
    const [number, setNumber] = useState(7);

    const icremnet = () => {
        setNumber(number + 1);
    }

    const decrement = () => {
        setNumber(number - 1);
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Text>
                Liczba: {number}
            </Text>
            <View style={{
                flexDirection: 'row'
            }}>

                <Button
                    icon="minus"
                    style={{ margin: 10, backgroundColor: "#cacccf" }}
                    mode="contained"
                    onPress={decrement}>
                    <Text >  Odejmij</Text>
                </Button>
                <Button
                    icon="plus"
                    style={{ margin: 10, backgroundColor: "#cacccf" }}
                    mode="contained"
                    onPress={icremnet}>
                    <Text >  Dodaj</Text>
                </Button>
            </View>
            <Button
                mode="contained"
                onPress={() =>
                    navigation.navigate('DataSharing2',
                        { number: number },
                    )}   >
                <Text style={{ color: 'white' }}>Drugi ekran z przekazną liczbą</Text>
            </Button>
        </View>
    )
}

export default DataSharing
