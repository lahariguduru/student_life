import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Reference = () => {
  return (
    <ImageBackground
      style={styles.referenceIcon}
      resizeMode="cover"
      source={require("../assets/reference.png")}
    />
  );
};

const styles = StyleSheet.create({
  referenceIcon: {
    width: 604,
    height: 724,
  },
});

export default Reference;
