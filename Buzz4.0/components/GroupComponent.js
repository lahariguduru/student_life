import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({
  prop,
  propLeft,
  propWidth,
  onGroupPressablePress,
}) => {
  const groupPressableStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <Pressable
      style={[styles.groupParent, groupPressableStyle]}
      onPress={onGroupPressablePress}
    >
      <View style={styles.contactPosition}>
        <View style={styles.contactPosition}>
          <View style={[styles.contact, styles.contactPosition]} />
          <Text style={[styles.ftAboveGround, styles.textTypo]}>
            FT ABOVE GROUND
          </Text>
          <Text style={[styles.text, styles.textTypo, textStyle]}>{prop}</Text>
        </View>
      </View>
      <Image
        style={styles.heightIcon}
        contentFit="cover"
        source={require("../assets/height1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contactPosition: {
    left: 0,
    top: 0,
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
  ftAboveGround: {
    top: 57,
    left: 80,
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_200,
    width: 184,
    height: 13,
  },
  text: {
    top: 24,
    left: 78,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    width: 50,
  },
  heightIcon: {
    top: 31,
    left: 29,
    width: 30,
    height: 30,
    position: "absolute",
  },
  groupParent: {
    top: 682,
    left: 33,
    height: 99,
    width: 329,
    position: "absolute",
  },
});

export default GroupComponent;
