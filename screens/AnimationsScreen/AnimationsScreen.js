import React from 'react';
import { Animated, View } from 'react-native';

const AnimationsScreen = () => {
    const spinValue = new Animated.Value(0);
    const animatedValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 1000,
            }
        )
    ).start();

    Animated.loop(
        Animated.timing(
            animatedValue,
            {
                toValue: 1,
                duration: 2000,
            }
        )
    ).start();


    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['180deg', '360deg']
    })

    const opacity = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 1, 0]
    })
    const movingMargin = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 300, 0]
    })
    const textSize = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [18, 32, 18]
    })

    return (
        <View>

            <View
                style={{
                    marginTop: 40,
                    marginBottom: 40,
                    alignItems: 'center',
                    flex: 1,
                    justifyContent: 'center',
                }}  >
                <Animated.View
                    style={{
                        opacity,
                        height: 48,
                        width: 48,
                        backgroundColor: 'blue'
                    }} />
            </View>

            <View style={{
                marginTop: 40,
                marginBottom: 40,
                marginLeft: -150,
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
            }}>
                <Animated.View
                    style={{
                        marginLeft: movingMargin,
                        height: 48,
                        width: 48,
                        backgroundColor: 'orange'
                    }} />
            </View>

            <View style={{
                marginTop: 40,
                marginBottom: 40,
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
            }}>
                <Animated.View
                    style={{
                        transform: [{ rotate: spin }],
                        height: 48,
                        width: 48,
                        backgroundColor: 'green'
                    }} />
            </View>


            <View style={{
                marginTop: 40,
                marginBottom: 40,
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
            }}>
                <Animated.Text
                    style={{
                        fontSize: textSize,
                        marginTop: 10,
                    }} >
                    Text
      </Animated.Text>
            </View>

        </View>
    );
}



export default AnimationsScreen

