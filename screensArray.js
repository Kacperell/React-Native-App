// import Home from './screens/Home';
import FormWithDateSaving from './screens/FormWithDateSaving/FormWithDateSaving';
import Bst from './screens/BSTtime/Bst';
import Camera from './screens/Camera/CameraScreen';
import GPS from './screens/GPS/GPS';
import AccelerometerScreen from './screens/Accelerometer/AccelerometerScreen';
import AudioRecorder from './screens/AudioRecorder/AudioRecorder';
import VideoYT from './screens/VideoYT/VideoYT';
import ListViewScreen from './screens/ListViewScreen/ListViewScreen';
import ModalScreen from './screens/ModalScreen/ModalScreen';
import Alert from './screens/Alert/Alert';

const screens = [

    { name: 'FormWithDateSaving', text: 'Formularz z zapisem do bazy', component: FormWithDateSaving },
    { name: 'Camera', text: 'Dostęp do aparatu', component: Camera },
    { name: 'Bst', text: 'Binarne drzewo poszukiwań - Pomiar czasu', component: Bst },
    { name: 'GPS', text: 'Lokalizacja gps', component: GPS },
    { name: 'Accelerometer', text: 'Akcelerometr i żyroskop', component: AccelerometerScreen },
    { name: 'AudioRecorder', text: 'Nagranie dźwieku', component: AudioRecorder },
    { name: 'VideoYT', text: 'Obsługa multimediów', component: VideoYT },
    { name: 'ListViewScreen', text: 'Dynamiczna lista', component: ListViewScreen },
    { name: 'ModalScreen', text: 'Okna modalne', component: ModalScreen },
    { name: 'Alert', text: 'Alert', component: Alert },

];
export default screens

