import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ArrowComponent = ({
  arrowComponentPosition,
  arrowComponentTop,
  arrowComponentLeft,
  onLocationPress,
  onHomePress,
  onPlusPress,
  onProfilePress,
}) => {
  const arrowComponentStyle = useMemo(() => {
    return {
      ...getStyleValue("position", arrowComponentPosition),
      ...getStyleValue("top", arrowComponentTop),
      ...getStyleValue("left", arrowComponentLeft),
    };
  }, [arrowComponentPosition, arrowComponentTop, arrowComponentLeft]);

  return (
    <View style={[styles.arrowComponent, arrowComponentStyle]}>
      <Image
        style={[styles.arrowComponentChild, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Pressable style={styles.location} onPress={onLocationPress}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/location.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.home, styles.homePosition]}
        onPress={onHomePress}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.plus, styles.plusPosition]}
        onPress={onPlusPress}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/plus.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.profile, styles.homePosition]}
        onPress={onProfilePress}
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
    height: "59%",
    bottom: "23%",
    top: "18%",
    position: "absolute",
  },
  plusPosition: {
    bottom: "15.4%",
    top: "7.6%",
    height: "77%",
    position: "absolute",
  },
  arrowComponentChild: {
    width: "83.75%",
    right: "16.25%",
    left: "0%",
    borderRadius: Border.br_11xl,
    bottom: "15.4%",
    top: "7.6%",
    height: "77%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  location: {
    left: "43.75%",
    top: "15.4%",
    right: "40.6%",
    bottom: "20.4%",
    height: "64.2%",
    width: "15.65%",
    position: "absolute",
  },
  home: {
    left: "25.65%",
    right: "58.7%",
    width: "15.65%",
  },
  plus: {
    left: "61.25%",
    right: "20%",
    width: "18.75%",
  },
  profile: {
    left: "6.25%",
    right: "79.35%",
    width: "14.4%",
  },
  arrowComponent: {
    width: 200,
    height: 50,
  },
});

export default ArrowComponent;
