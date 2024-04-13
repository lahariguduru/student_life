import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const PlusMath2 = () => {
  return (
    <ImageBackground
      style={styles.plusMathIcon}
      resizeMode="cover"
      source={require("../assets/plusmath1.png")}
    />
  );
};

const styles = StyleSheet.create({
  plusMathIcon: {
    width: 13,
    height: 13,
  },
});

export default PlusMath2;
