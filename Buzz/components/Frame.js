import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Frame = () => {
  return (
    <View style={styles.ellipseParent}>
      <Image
        style={[styles.frameChild, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 210,
    top: 0,
    position: "absolute",
    height: 210,
  },
  frameChild: {
    left: 250,
  },
  frameItem: {
    left: 0,
  },
  ellipseParent: {
    width: 460,
    height: 210,
  },
});

export default Frame;
