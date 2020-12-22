import React, { useState, useEffect } from 'react'
import {
    Text,
    View
} from "react-native";

function DataSharing2(route, navigation) {
    const [number, setNumber] = useState('');

    useEffect(() => {
        setNumber(route.route.params.number);
    }, [])

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Text>
                Przakazana liczba:{number}
            </Text>
        </View>
    )
}

export default DataSharing2
