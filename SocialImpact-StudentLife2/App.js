const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomePage from "./screens/HomePage";
import GeneralMap from "./screens/GeneralMap";
import UserModal from "./components/UserModal";
import LoginPage from "./screens/LoginPage";
import PartyMode from "./screens/PartyMode";
import GroupModal from "./screens/GroupModal";
import ExpandArrow from "./components/ExpandArrow";
import ExpandArrow1 from "./components/ExpandArrow1";
import FrameImage from "./screens/FrameImage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

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
              name="GeneralMap"
              component={GeneralMap}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserModal"
              component={UserModal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
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
              name="FrameImage"
              component={FrameImage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
