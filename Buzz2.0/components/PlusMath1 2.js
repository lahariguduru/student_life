import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const PlusMath1 = () => {
  return (
    <ImageBackground
      style={styles.plusMathIcon}
      resizeMode="cover"
      source={require("../assets/plusmath.png")}
    />
  );
};

const styles = StyleSheet.create({
  plusMathIcon: {
    width: 10,
    height: 10,
  },
});

export default PlusMath1;
