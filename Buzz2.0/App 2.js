const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage";
import BuzzlogoRemovebgPreview from "./components/BuzzlogoRemovebgPreview";
import Error1 from "./components/Error1";
import AnimatedButtonRef from "./components/AnimatedButtonRef";
import AnimationNavButtonWIP from "./components/AnimationNavButtonWIP";
import PlusMath from "./components/PlusMath";
import PlusMath1 from "./components/PlusMath1";
import Frame from "./screens/Frame";
import UserModal from "./components/UserModal";
import PartyMode from "./screens/PartyMode";
import GroupModal from "./screens/GroupModal";
import GeneralMap from "./screens/GeneralMap";
import UserModal1 from "./components/UserModal1";
import UserModal2 from "./components/UserModal2";
import UserModal3 from "./components/UserModal3";
import HeartRate from "./screens/HeartRate";
import WalkingAsymmetry from "./screens/WalkingAsymmetry";
import YAxis from "./screens/YAxis";

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
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PartyMode"
              component={PartyMode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GroupModal"
              component={GroupModal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GeneralMap"
              component={GeneralMap}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HeartRate"
              component={HeartRate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WalkingAsymmetry"
              component={WalkingAsymmetry}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YAxis"
              component={YAxis}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
