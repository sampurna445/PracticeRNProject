import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../features/counter/counterSlice';
import styles from './styles';
import {addCar} from '../../features/car/carSlice';

const TestReduxScreen = () => {
  const [textInputVal, setTextInputVal] = useState('');
  const [currentCar, setCurrentCar] = useState([]);
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  const car = useSelector(state => state.car);
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

      <FlatList
        data={car}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>{item}</Text>
              <Text>{index}</Text>
            </View>
          );
        }}
      />

      <TextInput
        value={currentCar}
        onChangeText={changedText => {
          setCurrentCar(changedText);
        }}
        style={{backgroundColor: 'pink', height: 40, padding: 5, margin: 10}}
      />

      <TouchableOpacity
        onPress={() => {
          dispatch(addCar(currentCar));
        }}>
        <Text>Add Car</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestReduxScreen;
