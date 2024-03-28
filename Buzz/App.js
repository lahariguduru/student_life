const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage";
import GeneralMap from "./screens/GeneralMap";
import Modal1 from "./components/Modal1";
import Walking from "./components/Walking";
import DistanceIcon from "./components/DistanceIcon";
import Group from "./screens/Group";
import Frame from "./components/Frame";
import LoginPage1 from "./screens/LoginPage1";
import LoginPage2 from "./screens/LoginPage2";
import LoginPage3 from "./screens/LoginPage3";
import LoginPage4 from "./screens/LoginPage4";
import LoginPage5 from "./screens/LoginPage5";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GeneralMap"
              component={GeneralMap}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage1"
              component={LoginPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage2"
              component={LoginPage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage3"
              component={LoginPage3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage4"
              component={LoginPage4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage5"
              component={LoginPage5}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
