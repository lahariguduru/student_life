import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Error1 = () => {
  return (
    <ImageBackground
      style={styles.errorIcon}
      resizeMode="cover"
      source={require("../assets/error.png")}
    />
  );
};

const styles = StyleSheet.create({
  errorIcon: {
    width: 46,
    height: 46,
  },
});

export default Error1;
