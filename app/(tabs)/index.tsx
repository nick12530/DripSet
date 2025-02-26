// ✅ Correct: Single NavigationContainer
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/detailScreen';
import { RootStackParamList } from '../../types';


const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
}

export default App;