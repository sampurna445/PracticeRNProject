import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TestReduxScreen} from '../screens';

Stack = createNativeStackNavigator();

const Navigator = () => {
  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="testReduxScreen"
          component={TestReduxScreen}
          options={{title: 'Test Redux Screen'}}
        />
      </Stack.Group>
    );
  };
  // const getAuthStack = () => {
  //     return (
  //       <Stack.Group>
  //         <Stack.Screen
  //           name="login"
  //           component={Login}
  //           options={{title: 'Login'}}
  //         />
  //       </Stack.Group>
  //     );
  //   };

  return (
    <Stack.Navigator>
      {/* {isUserLoggedIn() ? getMainStack() : getAuthStack()} */}
      {getMainStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
