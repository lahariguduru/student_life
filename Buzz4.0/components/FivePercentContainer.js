import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const FivePercentContainer = ({ onGroupPressablePress }) => {
  return (
    <Pressable
      style={[styles.contactParent, styles.contactLayout]}
      onPress={onGroupPressablePress}
    >
      <View style={[styles.contact, styles.contactLayout]} />
      <Text style={[styles.walkingAsymmetry, styles.textTypo]}>
        WALKING ASYMMETRY
      </Text>
      <Text style={[styles.text, styles.textTypo]}>5%</Text>
      <Image
        style={styles.walkingIcon}
        contentFit="cover"
        source={require("../assets/walking1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contactLayout: {
    height: 99,
    width: 329,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  contact: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  walkingAsymmetry: {
    top: 57,
    left: 79,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_200,
    width: 184,
    height: 13,
  },
  text: {
    top: 24,
    left: 77,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    width: 50,
    height: 40,
  },
  walkingIcon: {
    top: 30,
    left: 27,
    width: 35,
    height: 32,
    position: "absolute",
  },
  contactParent: {
    top: 567,
    left: 33,
  },
});

export default FivePercentContainer;
