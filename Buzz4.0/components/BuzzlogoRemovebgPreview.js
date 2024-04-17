import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const BuzzlogoRemovebgPreview = () => {
  return (
    <ImageBackground
      style={styles.buzzlogoRemovebgPreview1}
      resizeMode="cover"
      source={require("../assets/buzzlogoremovebgpreview11.png")}
    />
  );
};

const styles = StyleSheet.create({
  buzzlogoRemovebgPreview1: {
    width: 249,
    height: 273,
  },
});

export default BuzzlogoRemovebgPreview;
