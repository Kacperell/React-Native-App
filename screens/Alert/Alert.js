import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet
} from "react-native";
import { Button, Snackbar } from 'react-native-paper';

function Alert() {
    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => {
        setVisible(true);
        setTimeout(
            function () {
                setVisible(false);
            },
            3000
        );
    }

    return (
        <View className='alert' style={styles.container}>
            <Button
                mode="contained"
                onPress={onToggleSnackBar}     >
                <Text style={{ color: 'white' }}>Wyświetl alert</Text>
            </Button>

            <Snackbar
                visible={visible}
                className="alert__snackbar"
                style={styles.alert__snackbar}
            >
                Przykładowy alert
      </Snackbar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    alert__snackbar: {
        margin: 'auto',
        marginBottom: '30px',
        maxWidth: '80%',
        color: 'rgb(13, 60, 97)',
        backgroundColor: 'grey',
    }

});

export default Alert

