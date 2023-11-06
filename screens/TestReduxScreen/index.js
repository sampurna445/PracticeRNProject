import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../features/counter/counterSlice';
import styles from './styles';

const TestReduxScreen = () => {
  const [textInputVal, setTextInputVal] = useState('');
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  return (
    <View>
      <Text>Test Redux Screen</Text>
      <Text>{count}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(increment());
        }}>
        <Text>Incerement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(decrement());
        }}>
        <Text>Decerement</Text>
      </TouchableOpacity>
      <TextInput
        val={textInputVal}
        style={styles.textInput}
        onChangeText={changedText => {
          setTextInputVal(changedText);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(incrementByAmount(parseInt(textInputVal)));
        }}>
        <Text>Incerement By Value</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestReduxScreen;
