
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { storeData, getData } from './notesProvider';
import { Button } from 'react-native-paper';
import { Divider, TextInput } from 'react-native-paper';
import uuid from 'react-native-uuid';

// import { blue300 } from 'react-native-paper/lib/typescript/src/styles/colors';


export default function FormWithDateSaving({ navigation }) {
    const [textNote, setTextNote] = useState('');
    const [notes, setNotes] = useState(null);


    async function fetchNotes() {
        const notes = await getData();
        setNotes(notes);
    }


    useEffect(() => {
        // await setNotes(getData());
        fetchNotes();
    }, []);


    const listItem = ({ item }) => (
        // <Item title={item.title} />
        <View style={{ padding: 3 }}>

            <Text style={{ alignSelf: 'center' }}>{item}</Text>
            <Divider style={{ alignSelf: 'center', width: '75%', margin: 3 }} />

        </View>

    );

    return (
        <View style={{ flex: 1, }}>

            <TextInput
                label="Wprowadź notatkę"
                value={textNote}
                style={styles.noteInput}
                onChangeText={textNote => setTextNote(textNote)}
            />

            <Button
                style={styles.buttonAddNote}
                mode="contained" onPress={async () => {
                    if (textNote == '') {
                        return;
                    }
                    storeData(textNote);
                    let newNotes = notes;
                    newNotes.push(textNote);
                    setNotes(newNotes);
                    setTextNote('');

                }}>
                <Text
                    textAlign='center'
                    style={styles.buttonAddNoteText}
                >   Dodaj notatkę do bazy</Text>

            </Button>


            <FlatList
                data={notes}
                renderItem={listItem}
                key={uuid.v1()}
            // keyExtractor={uuid.v1()}
            />


        </View>
    );
}


const styles = StyleSheet.create({
    noteInput: {
        margin: 10
    },
    buttonAddNote: {
        width: 300,
        margin: 'auto',
        alignSelf: 'center',
        color: 'red'
    },
    buttonAddNoteText: {
        color: 'white',
        alignSelf: 'flex-end'

    }

});