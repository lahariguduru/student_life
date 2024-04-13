import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const AnimationNavButtonWIP = () => {
  return (
    <View style={[styles.animationNavButtonWip, styles.baseFlexBox]}>
      <View style={styles.buttonSimpleAnimations}>
        <View style={[styles.base, styles.baseFlexBox]}>
          <Text style={styles.text}>{`< placeholder text>`}</Text>
          <Image
            style={styles.iconPlaceholder}
            contentFit="cover"
            source={require("../assets/icon--placeholder.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.textMdMedium_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.textMdMedium,
    color: Color.textLight,
    textAlign: "left",
  },
  iconPlaceholder: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
  base: {
    flex: 1,
    backgroundColor: Color.primary,
    shadowColor: "rgba(16, 24, 40, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.primary,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
  },
  buttonSimpleAnimations: {
    width: 196,
    flexDirection: "row",
  },
  animationNavButtonWip: {
    borderRadius: Border.br_xl,
    display: "none",
  },
});

export default AnimationNavButtonWIP;
