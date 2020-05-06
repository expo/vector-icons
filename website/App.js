import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, StatusBar, View } from "react-native";
import { version } from "@expo/vector-icons/package.json";
import List from "./screens/List";
import Detail from "./screens/Detail";
import Help from "./screens/Help";

const IsPwa = !!["fullscreen", "standalone", "minimal-ui"].some((displayMode) =>
  window.matchMedia("(display-mode: " + displayMode + ")")
).matches;
const IsSmallScreen = Dimensions.get("window").width <= 900;
const ShowHeader = IsPwa || !IsSmallScreen;

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
function Browsing() {
  return (
    <BrowsingStack.Navigator
      mode="modal"
      headerMode={ShowHeader ? "float" : "none"}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
          borderBottomColor: "#000",
        },
        headerTintColor: "#ccc",
      }}
    >
      <BrowsingStack.Screen
        name="List"
        component={List}
        options={{
          title: `@expo/vector-icons@${version}`,
        }}
      />
      <BrowsingStack.Screen name="Details" component={Detail} />
      <BrowsingStack.Screen name="Help" component={Help} />
    </BrowsingStack.Navigator>
  );
}

const Stack = createStackNavigator();
function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Index" component={Browsing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <View style={{ backgroundColor: "#fafafa", flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Navigation />
    </View>
  );
}
