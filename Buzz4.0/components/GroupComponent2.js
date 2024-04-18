import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const GroupComponent2 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.contactPosition}>
        <View style={styles.contactPosition}>
          <View style={[styles.contact, styles.contactPosition]} />
          <Text style={[styles.ftAboveGround, styles.ftTypo]}>
            FT ABOVE GROUND
          </Text>
          <Text style={[styles.ft, styles.ftTypo]}>13 ft</Text>
        </View>
      </View>
      <Image
        style={styles.heightIcon}
        contentFit="cover"
        source={require("../assets/height1.png")}
      />
    </View>
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
  ftTypo: {
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
  ft: {
    top: 24,
    left: 78,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    width: 73,
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

export default GroupComponent2;
