import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusBar1 = ({ wifi, batteryRight, batteryLeft }) => {
  const statusBarStyle = useMemo(() => {
    return {
      ...getStyleValue("right", batteryRight),
      ...getStyleValue("left", batteryLeft),
    };
  }, [batteryRight, batteryLeft]);

  return (
    <View style={[styles.statusBar, statusBarStyle]}>
      <Text style={[styles.time, styles.timePosition]}>9:41</Text>
      <View style={[styles.battery, styles.timePosition]}>
        <View style={[styles.border, styles.timePosition]} />
        <Image
          style={[styles.capIcon, styles.timePosition]}
          contentFit="cover"
          source={require("../assets/cap.png")}
        />
        <View style={[styles.capacity, styles.timePosition]} />
      </View>
      <Image style={styles.wifiIcon} contentFit="cover" source={wifi} />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  time: {
    marginTop: -7.5,
    left: 21,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "center",
    width: 54,
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    marginTop: -1.95,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    marginTop: -3.65,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorBlack,
    width: 18,
    height: 7,
  },
  battery: {
    marginTop: -4.2,
    right: 14,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  statusBar: {
    top: 0,
    right: 3,
    left: -3,
    height: 47,
    position: "absolute",
  },
});

export default StatusBar1;
