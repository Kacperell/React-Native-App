
import AsyncStorage from '@react-native-async-storage/async-storage';
const dbkey = 'dbkey';
const storeData = async (value) => {
    try {
        let storedValue = await AsyncStorage.getItem(dbkey)
        storedValue = storedValue != null ? JSON.parse(storedValue) : null;

        if (storedValue == null) {
            storedValue = [value];
        } else {
            storedValue.push(value);
        }
        const jsonValue = JSON.stringify(storedValue);
        await AsyncStorage.setItem(dbkey, jsonValue);

    } catch (e) {
        console.log(e);
        // saving error
    }
};

const getData = async () => {

    console.log('getData');

    try {
        const jsonValue = await AsyncStorage.getItem(dbkey)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}
export { storeData, getData };