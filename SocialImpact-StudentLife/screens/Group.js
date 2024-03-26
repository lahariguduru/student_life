import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Group = () => {
  return (
    <View style={styles.phoneParent}>
      <Image
        style={styles.phoneIcon}
        contentFit="cover"
        source={require("../assets/phone.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  phoneIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 100,
  },
  phoneParent: {
    flex: 1,
    width: "100%",
    height: 100,
  },
});

export default Group;
