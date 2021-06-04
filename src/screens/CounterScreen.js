import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    //  state === { counter: number }
    //  action === { type: 'change_counter', payload: 1},
    return action.type === 'change_counter' ? { counter: action.palyload } : state;
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0});
    const {counter} = state;
    
    return (
        <View>
            <Button title= "Increase" onPress = { () => {
                dispatch({ type: 'change_counter', palyload: counter + 1});
            }}/>
            <Button title= "Decrease" onPress = { () => {
                dispatch({ type: 'change_counter', palyload: counter - 1});
            }}/>
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default CounterScreen;