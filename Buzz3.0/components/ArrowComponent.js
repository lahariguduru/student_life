import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border } from "../GlobalStyles";

const ArrowComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.arrowComponent}>
      <Image
        style={[styles.arrowComponentChild, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Pressable
        style={styles.location}
        onPress={() => navigation.navigate("GeneralMap")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/location1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.home, styles.homePosition]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/home1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.plus, styles.plusPosition]}
        onPress={() => navigation.navigate("GroupModal")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/plus.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.profile, styles.homePosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/profile.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  homePosition: {
    height: "58.97%",
    bottom: "23.08%",
    top: "17.95%",
    position: "absolute",
  },
  plusPosition: {
    bottom: "15.38%",
    top: "7.69%",
    height: "76.92%",
    position: "absolute",
  },
  arrowComponentChild: {
    width: "83.75%",
    right: "16.25%",
    left: "0%",
    borderRadius: Border.br_11xl,
    bottom: "15.38%",
    top: "7.69%",
    height: "76.92%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  location: {
    left: "43.75%",
    top: "15.38%",
    right: "40.63%",
    bottom: "20.51%",
    height: "64.1%",
    width: "15.63%",
    position: "absolute",
  },
  home: {
    left: "25.63%",
    right: "58.75%",
    width: "15.63%",
  },
  plus: {
    left: "61.25%",
    right: "20%",
    width: "18.75%",
  },
  profile: {
    left: "6.25%",
    right: "79.38%",
    width: "14.38%",
  },
  arrowComponent: {
    width: 160,
    height: 39,
  },
});

export default ArrowComponent;
