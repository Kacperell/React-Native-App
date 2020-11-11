import Home from './screens/Home';
import FormWithDateSaving from './screens/FormWithDateSaving/FormWithDateSaving';
import Bst from './screens/BSTtime/Bst';
import Camera from './screens/Camera/CameraScreen';

const screens = [

    { name: 'FormWithDateSaving', text: 'Formularz z zapisem do bazy', component: FormWithDateSaving },
    { name: 'FormWithDateSaving2', text: 'Formularz z zapisem do bazy22', component: FormWithDateSaving },
    { name: 'Camera', text: 'Dostęp do aparatu', component: Camera },
    { name: 'Bst', text: 'Binarne drzewo poszukiwań - Pomiar czasu', component: Bst },

];
export default screens

