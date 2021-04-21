import React from 'react';
import { Text, StyleSheet } from  'react-native';

const ComponetsScreen = () => {
    return <Text style={styles.textStyle}>This is the Componets Screen</Text>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponetsScreen;