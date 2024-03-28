import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Modal1 = ({ onClose }) => {
  return (
    <View style={styles.modal}>
      <Text style={styles.janeDoe}>Jane Doe</Text>
      <Text style={[styles.voodooDonuts, styles.contact2Typo]}>
        Voodoo Donuts
      </Text>
      <View style={[styles.percent, styles.percentLayout]}>
        <View style={styles.contact1ShadowBox} />
        <Text style={[styles.text, styles.textPosition]}>45%</Text>
        <Image
          style={styles.userPercentageIcon}
          contentFit="cover"
          source={require("../assets/user-percentage1.png")}
        />
      </View>
      <View style={[styles.contact, styles.percentLayout]}>
        <View style={styles.contact1ShadowBox} />
        <Text style={[styles.contact2, styles.textPosition]}>Contact</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contact2Typo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  percentLayout: {
    height: 140,
    width: 146,
    top: 182,
    position: "absolute",
  },
  textPosition: {
    left: 26,
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  janeDoe: {
    top: 56,
    fontSize: 45,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    letterSpacing: 0,
    left: 42,
    position: "absolute",
  },
  voodooDonuts: {
    top: 119,
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    left: 42,
    position: "absolute",
  },
  contact1ShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
    height: 140,
    width: 146,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    top: 53,
    fontSize: FontSize.size_11xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    width: 95,
    height: 47,
  },
  userPercentageIcon: {
    top: 28,
    left: 30,
    width: 85,
    height: 85,
    position: "absolute",
  },
  percent: {
    left: 199,
  },
  contact2: {
    top: 100,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  contact: {
    left: 42,
    height: 140,
    width: 146,
    top: 182,
  },
  modal: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    width: 393,
    height: 500,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Modal1;
