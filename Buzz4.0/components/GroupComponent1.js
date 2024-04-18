import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const GroupComponent1 = ({ onGroupPressablePress }) => {
  return (
    <Pressable
      style={[styles.contactParent, styles.contactLayout]}
      onPress={onGroupPressablePress}
    >
      <View style={[styles.contact, styles.contactLayout]} />
      <Text style={[styles.bpm, styles.bpmTypo]}>BPM</Text>
      <Text style={[styles.text, styles.bpmTypo]}>60</Text>
      <Image
        style={styles.heartIcon}
        contentFit="cover"
        source={require("../assets/heart1.png")}
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
  bpmTypo: {
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
  bpm: {
    top: 59,
    left: 80,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_200,
    width: 184,
    height: 13,
  },
  text: {
    top: 26,
    left: 78,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    width: 50,
    height: 40,
  },
  heartIcon: {
    top: 35,
    left: 30,
    width: 27,
    height: 27,
    position: "absolute",
  },
  contactParent: {
    top: 452,
    left: 33,
  },
});

export default GroupComponent1;
