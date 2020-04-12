import { useMediaQuery } from 'react-responsive';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import List from './screens/List';
import Detail from './screens/Detail';

const myTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7B1FA2',
    accent: '#E1BEE7',
  },
};

const Stack = createStackNavigator();

export default function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });

  return (
    <NavigationContainer>
      <View
        style={[
          styles.container,
          { paddingHorizontal: isDesktop ? 300 : null },
        ]}>
        <PaperProvider theme={myTheme}>
          <StatusBar barStyle="light-content" />
          <Stack.Navigator mode="modal" headerMode="float">
            <Stack.Screen
              options={{ headerShown: false }}
              name="@expo/vector-icons | PWA"
              component={List}
              options={{
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
        </PaperProvider>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(225, 190, 231,0.6)',
  },
});
