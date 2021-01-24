
import AsyncStorage from '@react-native-async-storage/async-storage';
const dbkey = 'dbkey';
const storeData = async (value, noteSelect, noteCheckbox, noteRadio) => {
    try {
        let storedValue = await AsyncStorage.getItem(dbkey)

        storedValue = storedValue != null ? JSON.parse(storedValue) : null;

        let note = {
            textNote: value,
            noteSelect,
            noteCheckbox,
            noteRadio
        }

        if (storedValue == null) {
            storedValue = [note];
        } else {
            storedValue.push(note);
        }



        const jsonValue = JSON.stringify(storedValue);
        await AsyncStorage.setItem(dbkey, jsonValue);

    } catch (e) {
        console.log(e);
    }
};

const getData = async () => {

    try {
        const jsonValue = await AsyncStorage.getItem(dbkey)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}
export { storeData, getData };