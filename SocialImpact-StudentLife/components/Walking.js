import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Walking = () => {
  return (
    <ImageBackground
      style={styles.walkingIcon}
      resizeMode="cover"
      source={require("../assets/walking.png")}
    />
  );
};

const styles = StyleSheet.create({
  walkingIcon: {
    width: 45,
    height: 45,
  },
});

export default Walking;
