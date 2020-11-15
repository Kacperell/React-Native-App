import React from "react";
import { StyleSheet, View } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

export default function VideoYt() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <YoutubePlayer
                height={300}
                play={true}
                videoId={"fwkJtgVswgM"}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        width: 200,
        marginBottom: 10,
    },
});