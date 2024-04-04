import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const ExpandArrow1 = () => {
  return (
    <ImageBackground
      style={styles.expandArrowIcon}
      resizeMode="cover"
      source={require("../assets/expandarrow.png")}
    />
  );
};

const styles = StyleSheet.create({
  expandArrowIcon: {
    width: 20,
    height: 20,
  },
});

export default ExpandArrow1;
