import React, { useState, useEffect } from 'react'
import {
    Alert,
    Modal,
    StyleSheet,
    Image,
    Text,
    View,
    Linking
} from "react-native";
import { Button } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

const gifDir = FileSystem.cacheDirectory + 'files/';

const getFileJPG = () => gifDir + `photo.jpg`;
const getFileMovie = () => gifDir + `movie.mp4`;

const getUrlPhoto = () => `https://upload.wikimedia.org/wikipedia/commons/7/78/Canyonlands_National_Park%E2%80%A6Needles_area_%286294480744%29.jpg`;
const getUrlMovie = () => `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`;

function DownloadingFiles() {
    const [photoStatus, setPhotoStatus] = useState(false);
    const [movieStatus, setMovieStatus] = useState(false);

    async function ensureDirExists() {
        const dirInfo = await FileSystem.getInfoAsync(gifDir);
        if (!dirInfo.exists) {
            console.log("Gif directory doesn't exist, creating...");
            await FileSystem.makeDirectoryAsync(gifDir, { intermediates: true });
        }
    }

    async function getSingleFile(url, file, type) {
        await ensureDirExists();
        await FileSystem.downloadAsync(url, file)
            .then(({ uri }) => {
                saveFile(uri, type);
            })
            .catch(error => {
                console.error(error);
            })
        return fileUri;
    }


    function msToTime(s) {
        let ms = s % 1000;
        s = (s - ms) / 1000;
        let secs = s % 60;
        s = (s - secs) / 60;
        let mins = s % 60;
        let hrs = (s - mins) / 60;
        return hrs + ':' + mins + ':' + secs + '.' + ms;
    }

    const saveFile = async (fileUri, type) => {


        if (type === 1) {
            const timeEnd = performance.now()
            const timeDifference = Math.round(timeEnd - timeStartPhoto);
            const timeMs = msToTime(timeDifference);
            setPhotoStatus(`Zdjęcie pobrane i zapisany w galerii  w czasie:${timeMs}`);
        } else if (type === 2) {
            const timeEnd = performance.now()
            const timeDifference = Math.round(timeEnd - timeStartMovie);
            const timeMs = msToTime(timeDifference);
            setMovieStatus(`Film został pobrany i zapisny w galerii czasie:${timeMs}`);
        }



        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        //zapisanie w galerii
        if (status === "granted") {
            const asset = await MediaLibrary.createAssetAsync(fileUri)
            await MediaLibrary.createAlbumAsync("Download", asset, false)
        }
    }


    let timeStartPhoto;
    const downladPhoto = () => {
        setPhotoStatus('Pobieranie zdjęcia');

        timeStartPhoto = performance.now()
        getSingleFile(getUrlPhoto(), getFileJPG(), 1);

    }
    let timeStartMovie;
    const downladVideo = () => {
        setMovieStatus('Pobieranie filmu');
        timeStartMovie = performance.now()
        getSingleFile(getUrlMovie(), getFileMovie(), 2);
    }





    return (
        <View style={styles.container}>

            {photoStatus &&
                <Text>{photoStatus}</Text>
            }
            <Button
                style={styles.button}
                mode="contained"
                onPress={downladPhoto}

            >
                <Text style={{ color: 'white' }}>Pobierz zdjęcie (2,36 MB)</Text>
            </Button>

            {movieStatus &&
                <Text>{movieStatus}</Text>
            }

            <Button
                style={styles.button}
                mode="contained"
                onPress={downladVideo}

            >
                <Text style={{ color: 'white' }}>Pobierz Film (158 MB)</Text>
            </Button>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        marginTop: 10,
        marginBottom: 50,
        width: 320
    }

});

export default DownloadingFiles





