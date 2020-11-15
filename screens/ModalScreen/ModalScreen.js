import React, { useState } from 'react'
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    View
} from "react-native";
import { Button } from 'react-native-paper';


function ModalScreen() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={[styles.centeredView, modalVisible ? { backgroundColor: 'rgba(0,0,0,0.3)' } : '']}>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTextTitle}>Modal</Text>
                        <Text style={styles.modalText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                        <Button
                            mode="contained" onPress={() => { setModalVisible(!modalVisible); }}        >
                            <Text style={{ color: 'white' }}>Ukryj</Text>
                        </Button>
                    </View>
                </View>
            </Modal>

            <Button
                mode="contained" onPress={() => { setModalVisible(true); }}  >
                <Text style={{ color: 'white' }}> Modal</Text>
            </Button>

        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },


    modalText: {
        marginBottom: 10,
        textAlign: "center"
    },

    modalTextTitle: {
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "bold"
    }
});


export default ModalScreen
