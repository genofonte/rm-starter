import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import ColorCounter from '../Components/ColorCounter'

const step = 10;

const reducer = (state, action) => {
    //  state === { red: number, green: number, blue: number }
    //  action === { type: 'change_red' || 'change_green' || 'change_blue', palyload: 15 || -15 }
    switch (action.type) {
        case 'change_red':
            return { ...state, red: state.red + action.palyload };
        case 'change_green':
            return { ...state, green: state.green + action.palyload };
        case 'change_blue':
            return { ...state, blue: state.blue + action.palyload };
        default:
            return state;
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_red', palyload: step })}
                onDecrease={() => dispatch({ type: 'change_red', palyload: -1 * step })}
                color="Red"
            />
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_green', palyload: step })}
                onDecrease={() => dispatch({ type: 'change_green', palyload: -1 * step })}
                color="Green"
            />
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_blue', palyload: step })}
                onDecrease={() => dispatch({ type: 'change_blue', palyload: -1 * step })}
                color="Blue"
            />
            <View 
                style ={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SquareScreen;