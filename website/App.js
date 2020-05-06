import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, StatusBar, View } from "react-native";
import List from "./screens/List";
import Detail from "./screens/Detail";
import Help from "./screens/Help";

const linking = {
  config: {
    Index: {
      initialRouteName: "List",
      path: "/",
      screens: {
        List: "/",
        Help: "help",
        Details: {
          path: ":family/:name",
        },
      },
    },
  },
};

const BrowsingStack = createStackNavigator();

const IsPwa = !!["fullscreen", "standalone", "minimal-ui"].some((displayMode) =>
  window.matchMedia("(display-mode: " + displayMode + ")")
).matches;

const IsSmallScreen = Dimensions.get("window").width <= 900;
const ShowHeader = IsPwa || !IsSmallScreen;

function Browsing() {
  return (
    <BrowsingStack.Navigator
      mode="modal"
      headerMode={ShowHeader ? "float" : "none"}
    >
      <BrowsingStack.Screen
        name="List"
        component={List}
        options={{
          title: "@expo/vector-icons directory",
          headerStyle: {
            backgroundColor: "#000",
            borderBottomColor: "#000",
          },
          headerTintColor: "#CCCCCC",
        }}
      />
      <BrowsingStack.Screen
        name="Details"
        component={Detail}
        options={{
          headerStyle: {
            backgroundColor: "#000",
            borderBottomColor: "#000",
          },
          headerTintColor: "#CCCCCC",
        }}
      />

      <Stack.Screen
        name="Help"
        component={Help}
        options={{
          headerStyle: {
            backgroundColor: "#000",
            borderBottomColor: "#000",
          },
          headerTintColor: "#CCCCCC",
        }}
      />
    </BrowsingStack.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ backgroundColor: "#FAFAFA", flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer linking={linking}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Index" component={Browsing} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
