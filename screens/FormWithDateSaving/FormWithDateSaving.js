
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { storeData, getData } from './notesProvider';
import { Button } from 'react-native-paper';
import { Divider, TextInput, Checkbox, RadioButton } from 'react-native-paper';
import uuid from 'react-native-uuid';
import RNPickerSelect from 'react-native-picker-select';

// import { blue300 } from 'react-native-paper/lib/typescript/src/styles/colors';


export default function FormWithDateSaving({ navigation }) {
    const [textNote, setTextNote] = useState('');
    const [selectValue, setSelectValue] = useState(null);
    const [notes, setNotes] = useState([]);

    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);

    const [redio, setRadio] = useState('radio1');

    async function fetchNotes() {
        const notes = await getData();
        console.log(notes);
        setNotes(notes);
    }


    useEffect(() => {
        // await setNotes(getData());
        fetchNotes();
    }, []);


    const listItem = ({ item }) => (
        // <Item title={item.title} />
        <View style={{ padding: 3, justifyContent: 'center' }}>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ alignSelf: 'center', paddingRight: 2 }}>{item.textNote}</Text>
                <Text style={{ alignSelf: 'center' }}>{item.noteSelect}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ alignSelf: 'center', paddingRight: 2 }}>{item.noteCheckbox}</Text>
                <Text style={{ alignSelf: 'center' }}>{item.noteRadio}</Text>
            </View>


            <Divider style={{ alignSelf: 'center', width: '75%', margin: 3 }} />

        </View>

    );


    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>

            <TextInput
                label="Wprowadź notatkę"
                value={textNote}
                style={styles.noteInput}
                onChangeText={textNote => setTextNote(textNote)}
            />

            <RNPickerSelect
                onValueChange={(value) => setSelectValue(value)}
                items={[
                    { label: 'A', value: 'A' },
                    { label: 'B', value: 'B' },
                    { label: 'C', value: 'C' },
                ]}
            />


            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                <View>
                    <Text>check 1</Text>
                    <Checkbox
                        label="Item"
                        title='optForReceipt s'
                        status={checkbox1 ? 'checked' : 'unchecked'}
                        onPress={() => { setCheckbox1(!checkbox1); }}
                    />
                </View>

                <View>
                    <Text>check 2</Text>
                    <Checkbox
                        label="Item"
                        title='optForReceipt s'
                        status={checkbox2 ? 'checked' : 'unchecked'}
                        onPress={() => { setCheckbox2(!checkbox2); }}
                    />
                </View>

                <View>
                    <Text>check 3</Text>
                    <Checkbox
                        label="Item"
                        title='optForReceipt s'
                        status={checkbox3 ? 'checked' : 'unchecked'}
                        onPress={() => { setCheckbox3(!checkbox3); }}
                    />
                </View>

            </View>

            <View>



                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton
                        value="radio1"
                        status={redio === 'radio1' ? 'checked' : 'unchecked'}
                        onPress={() => setRadio('radio1')}
                    />
                    <Text>Radio1</Text>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton
                        value="radio2"
                        status={redio === 'radio2' ? 'checked' : 'unchecked'}
                        onPress={() => setRadio('radio2')}
                    />
                    <Text>Radio2</Text>
                </View>

            </View>


            <Button
                style={styles.buttonAddNote}
                mode="contained" onPress={async () => {



                    if (textNote == '' || !selectValue) {
                        return;
                    }

                    let checkboxValues = '';
                    if (checkbox1) checkboxValues = checkboxValues + 'Check 1 ';
                    if (checkbox1) checkboxValues = checkboxValues + 'Check 2 ';
                    if (checkbox3) checkboxValues = checkboxValues + 'Check 3 ';

                    storeData(textNote, selectValue, checkboxValues, redio);
                    let newNotes;

                    if (notes) {
                        newNotes = notes;
                    } else {
                        newNotes = [];
                    }
                    let note = {
                        textNote,
                        noteSelect: selectValue,
                        noteCheckbox: checkboxValues,
                        noteRadio: redio
                    }
                    newNotes.push(note);
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
        // color: 'red'
    },
    buttonAddNoteText: {
        color: 'white',
        alignSelf: 'flex-end'

    }

});