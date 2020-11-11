import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';


class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
        this.count = 0;
    };
};

class BST {
    constructor() {
        this.root = null;
    }
    add(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        };
        let current = this.root;

        const addSide = side => {
            if (!current[side]) {
                current[side] = newNode;
                return this;
            };
            current = current[side];
        };

        while (true) {
            if (val === current.val) {
                current.count++;
                return this;
            };
            if (val < current.val) addSide('left');
            else addSide('right');
        };
    };
};


export default function Bst() {

    const numbersToBst = 1000000;
    const [time, setTime] = useState('Czas wykonania:');


    function msToTime(s) {
        let ms = s % 1000;
        s = (s - ms) / 1000;
        let secs = s % 60;
        s = (s - secs) / 60;
        let mins = s % 60;
        let hrs = (s - mins) / 60;
        return hrs + ':' + mins + ':' + secs + '.' + ms;
    }

    const startBst = () => {
        let tree = new BST();
        const t0 = performance.now()
        for (let i = 0; i < numbersToBst; i++) {
            tree.add(Math.floor(Math.random() * numbersToBst));
        }
        const t1 = performance.now()
        const timeDifference = Math.round(t1 - t0);
        const timeMs = msToTime(timeDifference);
        setTime(`Czas wykoania:${timeMs}`);
    }


    return (
        <View className='bst' style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


            <Text style={styles.bstSpan}>
                Dodaj {numbersToBst} liczb do binarnego drzewa przeszukiwań.
              </Text>
            <Text style={styles.bstSpan}>
                {time}
            </Text>

            <Button
                style={styles.button}
                mode="contained"
                onPress={startBst}>

                <Text style={{ color: 'white' }}>  Start</Text>
            </Button>


        </View>
    )
}



const styles = StyleSheet.create({
    button: {

    },

    bstSpan: {
        margin: 10
    }


});