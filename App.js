// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import GetNews from "./src/screens/GetNews";
import WebViewComponent from "./src/components/WebView";
import { COLORS, SIZES } from "./constants";
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import { useFonts } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

function App() {
  let [fontLoaded, error] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Trending"
          component={HomeScreen}
          options={{
            title: "N E W S A R O",
            headerTintColor: COLORS.lightGray,
            headerStyle: {
              backgroundColor: COLORS.black,
            },
            headerTitleStyle: {
              fontFamily: "Roboto_500Medium",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="GetNews"
          component={GetNews}
          options={{
            headerTintColor: COLORS.lightGray,
            headerStyle: {
              backgroundColor: COLORS.black,
            },
            headerTitleStyle: {
              fontFamily: "Roboto_400Regular",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="WebView"
          component={WebViewComponent}
          screenOptions={{ animationEnabled: false }}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
