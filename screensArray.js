import Home from './screens/Home';
import FormWithDateSaving from './screens/FormWithDateSaving/FormWithDateSaving';
import Bst from './screens/BSTtime/Bst';
import Camera from './screens/Camera/CameraScreen';
import GPS from './screens/GPS/GPS';
import AccelerometerScreen from './screens/Accelerometer/AccelerometerScreen';

const screens = [

    { name: 'FormWithDateSaving', text: 'Formularz z zapisem do bazy', component: FormWithDateSaving },
    { name: 'Camera', text: 'Dostęp do aparatu', component: Camera },
    { name: 'Bst', text: 'Binarne drzewo poszukiwań - Pomiar czasu', component: Bst },
    { name: 'GPS', text: 'Lokalizacja gps', component: GPS },
    { name: 'Accelerometer', text: 'Akcelerometr ', component: AccelerometerScreen },

];
export default screens
