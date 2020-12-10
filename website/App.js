import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, StatusBar, View } from "react-native";
import { version } from "@expo/vector-icons/package.json";
import {
  AntDesign,
  Octicons,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Ocitcons,
  Zocial,
  Fontisto,
} from "@expo/vector-icons";
import List from "./screens/List";
import Detail from "./screens/Detail";
import Help from "./screens/Help";

// rm -rf service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => {
      for (let registration of registrations) {
        registration.unregister();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

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
      <View
        style={{ display: "none", position: "absolute", pointerEvents: "none" }}
      >
        <AntDesign name="stepforward" size={24} color="black" />
        <Entypo name="500px" size={24} color="black" />
        <EvilIcons name="archive" size={24} color="black" />
        <Feather name="activity" size={24} color="black" />
        <FontAwesome name="glass" size={24} color="black" />
        <FontAwesome5 name="500px" size={24} color="black" />
        <Foundation name="address-book" size={24} color="black" />
        <Ionicons name="ios-add" size={24} color="black" />
        <MaterialIcons name="3d-rotation" size={24} color="black" />
        <MaterialCommunityIcons name="access-point" size={24} color="black" />
        <SimpleLineIcons name="user" size={24} color="black" />
        <Octicons name="alert" size={24} color="black" />
        <Zocial name="acrobat" size={24} color="black" />
        <Fontisto name="acrobat-reader" size={24} color="black" />
      </View>
      <Navigation />
    </View>
  );
}
