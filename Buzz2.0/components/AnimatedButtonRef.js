import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const AnimatedButtonRef = () => {
  return (
    <View style={styles.animatedButtonRef}>
      <View style={styles.baseFlexBox}>
        <View style={styles.buttonSimpleAnimations}>
          <View style={[styles.base, styles.baseFlexBox]}>
            <Text style={styles.text}>Placeholder Text</Text>
            <Image
              style={styles.iconPlaceholder}
              contentFit="cover"
              source={require("../assets/icon--placeholder.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.textMdMedium_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.textMdMedium,
    color: Color.light,
    textAlign: "left",
  },
  iconPlaceholder: {
    width: 20,
    height: 20,
    marginLeft: 8,
    overflow: "hidden",
    display: "none",
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
    overflow: "hidden",
    flexDirection: "row",
  },
  buttonSimpleAnimations: {
    width: 196,
    flexDirection: "row",
  },
  animatedButtonRef: {
    borderRadius: 8,
    backgroundColor: Color.light,
    padding: 40,
    display: "none",
  },
});

export default AnimatedButtonRef;
