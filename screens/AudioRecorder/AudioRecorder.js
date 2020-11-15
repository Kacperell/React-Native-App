import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import * as Permissions from 'expo-permissions';
import { Button } from 'react-native-paper';
import * as FileSystem from "expo-file-system";
export default function AudioRecorder() {
    const recordingSettings = {
        android: {
            extension: ".m4a",
            outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
            audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
            sampleRate: 44100,
            numberOfChannels: 2,
            bitRate: 128000,
        },
        ios: {
            extension: ".m4a",
            outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
            audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
            sampleRate: 44100,
            numberOfChannels: 2,
            bitRate: 128000,
            linearPCMBitDepth: 16,
            linearPCMIsBigEndian: false,
            linearPCMIsFloat: false,
        },
    };
    const [recording, setRecording] = useState(null);
    const [sound, setSound] = useState(null);
    const [isRecording, setIsRecording] = useState('');

    const askForPermissions = async () => {
        const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        if (response.granted == false) {
            alert('Odmowa dostępu');
        }
    };
    const startRecording = async () => {
        await askForPermissions();
        if (sound !== null) {
            await sound.unloadAsync();
            sound.setOnPlaybackStatusUpdate(null);
            setSound(null);
        }
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: false,
            staysActiveInBackground: true,
        });
        const _recording = new Audio.Recording();
        try {
            await _recording.prepareToRecordAsync(recordingSettings);
            setRecording(_recording);
            await _recording.startAsync();
            setIsRecording('Nagrywanie...');
        } catch (error) {
            alert("error while recording:", error)
            console.log("error while recording", error);
        }
    };



    const updateScreenForSoundStatus = (status) => {

    }
    const stopRecording = async () => {
        try {
            await recording.stopAndUnloadAsync();

        } catch (error) {
            alert("error while recording", error)
            console.log(error);
            return;
        }

        const info = await FileSystem.getInfoAsync(recording.getURI() || "");
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: false,
            staysActiveInBackground: true,
        });
        const { sound, status } = await recording.createNewLoadedSoundAsync(
            {
                isLooping: false,
                isMuted: false,
                volume: 1.0,
                rate: 1.0,
                shouldCorrectPitch: true,
            },
            updateScreenForSoundStatus
        );

        setIsRecording('Nagrano');
        setSound(sound);

    };

    const playSound = async () => {
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }
    return (
        <View className='audioRecorder' style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginBottom: 10 }}>
                {isRecording}
            </Text>
            <Button
                style={styles.button}
                mode="contained"
                onPress={startRecording}>
                <Text style={{ color: 'white' }}>  Nagraj</Text>
            </Button>
            <Button
                style={styles.button}
                mode="contained"
                onPress={stopRecording}>
                <Text style={{ color: 'white' }}>  Zatrzymaj</Text>
            </Button>
            {sound && <Button
                style={styles.button}
                mode="contained"
                onPress={playSound}>
                <Text style={{ color: 'white' }}>  Odtwórz</Text>
            </Button>
            }
        </View>

    )
}


const styles = StyleSheet.create({
    button: {
        width: 200,
        marginBottom: 10,
    },
});