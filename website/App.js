import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View } from 'react-native';
import List from './screens/List';
import Detail from './screens/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ backgroundColor: '#eee', flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator mode="modal" headerMode="float">
          <Stack.Screen
            name="List"
            component={List}
            options={{
              title: '@expo/vector-icons',
              headerStyle: {
                backgroundColor: '#7B1FA2',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Details"
            component={Detail}
            options={{
              headerStyle: {
                backgroundColor: '#7B1FA2',
              },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
