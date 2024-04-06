import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Percent = ({ userPercentage }) => {
  return (
    <View style={[styles.percent, styles.percentLayout]}>
      <View style={[styles.drunkPercentage, styles.percentLayout]} />
      <Text style={styles.text}>45%</Text>
      <Image
        style={styles.userPercentageIcon}
        contentFit="cover"
        source={userPercentage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  percentLayout: {
    height: 140,
    width: 144,
    position: "absolute",
  },
  drunkPercentage: {
    top: 0,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  text: {
    top: 53,
    left: 26,
    fontSize: FontSize.size_11xl,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.textMdMedium,
    color: Color.colorBlack,
    textAlign: "center",
    width: 94,
    height: 47,
    position: "absolute",
  },
  userPercentageIcon: {
    top: 28,
    left: 30,
    width: 84,
    height: 85,
    position: "absolute",
  },
  percent: {
    top: 163,
    left: 201,
  },
});

export default Percent;
