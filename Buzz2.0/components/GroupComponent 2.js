import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontSize, Border, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({
  propTop,
  onBApplePress,
  onBApplePress1,
  onBApplePress2,
}) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.userAParent, groupViewStyle]}>
      <Image
        style={styles.userAIcon}
        contentFit="cover"
        source={require("../assets/user-a1.png")}
      />
      <Image
        style={styles.userAIcon}
        contentFit="cover"
        source={require("../assets/user-a1.png")}
      />
      <Image
        style={styles.userAIcon}
        contentFit="cover"
        source={require("../assets/user-a1.png")}
      />
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={styles.angelaSmith}>Angela Smith</Text>
      <Text style={styles.angelaSmith}>Angela Smith</Text>
      <Text style={styles.angelaSmith}>Angela Smith</Text>
      <Text style={[styles.text, styles.textTypo]}>(512) 455 2929</Text>
      <Text style={[styles.text, styles.textTypo]}>(512) 455 2929</Text>
      <Text style={[styles.text, styles.textTypo]}>(512) 455 2929</Text>
      <Pressable
        style={[styles.bApple, styles.appleLayout]}
        onPress={onBApplePress}
      >
        <View style={[styles.apple, styles.appleLayout]} />
      </Pressable>
      <Pressable
        style={[styles.bApple, styles.appleLayout]}
        onPress={onBApplePress1}
      >
        <View style={[styles.apple, styles.appleLayout]} />
      </Pressable>
      <Pressable
        style={[styles.bApple, styles.appleLayout]}
        onPress={onBApplePress2}
      >
        <View style={[styles.apple, styles.appleLayout]} />
      </Pressable>
      <Text style={[styles.invite, styles.textTypo]}>Invite</Text>
      <Text style={[styles.invite, styles.textTypo]}>Invite</Text>
      <Text style={[styles.invite, styles.textTypo]}>Invite</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  appleLayout: {
    height: 40,
    width: 75,
    left: "50%",
    position: "absolute",
  },
  userAIcon: {
    left: 3,
    borderRadius: Border.br_981xl,
    width: 50,
    height: 50,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -166.5,
    top: 67,
    height: 1,
    left: "50%",
    width: 333,
    position: "absolute",
  },
  angelaSmith: {
    top: 6,
    left: 74,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.textMdMedium,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  text: {
    top: 25,
    left: 73,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
  },
  apple: {
    marginLeft: -37.5,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorDeeppink_100,
    top: 0,
  },
  bApple: {
    marginLeft: 91.5,
    top: 4,
  },
  invite: {
    top: 16,
    left: 267,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
  },
  userAParent: {
    top: 526,
    left: 10,
    height: 68,
    width: 333,
    position: "absolute",
  },
});

export default GroupComponent;
