import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const DistanceIcon = () => {
  return <View style={styles.distanceIcon} />;
};

const styles = StyleSheet.create({
  distanceIcon: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 4,
    width: 51,
    height: 8,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
});

export default DistanceIcon;
