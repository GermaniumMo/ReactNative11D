import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import ListScreen from './screens/ListScreen';
import ButtonScreen from './screens/ButtonScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Button'
        screenOptions={{
          headerTitle: 'APP',
        }}
      >
        <Stack.Screen name = "Button" component={ButtonScreen} />
        <Stack.Screen name = "Exercise" component={ExerciseScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name='List' component={ListScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
