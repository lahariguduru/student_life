import * as React from "react";
import { Image, StyleSheet } from "react-native";

const FrameImage = () => {
  return (
    <Image
      style={styles.frameIcon}
      resizeMode="cover"
      source={require("../assets/frame-31.png")}
    />
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    flex: 1,
    width: "100%",
    height: 210,
  },
});

export default FrameImage;
