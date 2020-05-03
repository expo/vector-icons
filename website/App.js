import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View } from 'react-native';
import List from './screens/List';
import Detail from './screens/Detail';
import Help from './screens/Help';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ backgroundColor: '#FAFAFA', flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator mode="modal" headerMode="float">
          <Stack.Screen
            name="List"
            component={List}
            options={{
              title: '@expo/vector-icons directory',
              headerStyle: {
                backgroundColor: '#000',
                borderBottomColor: '#000',
              },
              headerTintColor: '#CCCCCC',
            }}
          />
          <Stack.Screen
            name="Details"
            component={Detail}
            options={{
              headerStyle: {
                backgroundColor: '#000',
                borderBottomColor: '#000',
              },
              headerTintColor: '#CCCCCC',
            }}
          />
          <Stack.Screen
            name="Help"
            component={Help}
            options={{
              headerStyle: {
                backgroundColor: '#000',
                borderBottomColor: '#000',
              },
              headerTintColor: '#CCCCCC',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
