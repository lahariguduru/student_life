import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const UserModal1 = ({ onClose }) => {
  return (
    <View style={styles.userModal2}>
      <Text style={styles.krithiReddy}>Krithi Reddy</Text>
      <Text style={[styles.cava, styles.contactTypo]}>Cava</Text>
      <View style={[styles.percent, styles.contactLayout1]}>
        <View style={[styles.drunkPercentage, styles.contactShadowBox]} />
        <Text style={[styles.text, styles.contactPosition]}>20%</Text>
        <Image
          style={styles.userPercentageIcon}
          contentFit="cover"
          source={require("../assets/user-percentage1.png")}
        />
      </View>
      <View style={[styles.contact, styles.contactLayout1]}>
        <View style={[styles.contact1, styles.contactShadowBox]} />
        <Text style={[styles.contact2, styles.contactPosition]}>Contact</Text>
      </View>
      <View style={[styles.contact3, styles.contactLayout]}>
        <View style={[styles.contact4, styles.contactLayout]} />
        <Text style={[styles.contactLocalEmergency, styles.contactPosition]}>
          Contact Local Emergency
        </Text>
      </View>
      <Image
        style={styles.phoneIcon}
        contentFit="cover"
        source={require("../assets/phone1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contactTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  contactLayout1: {
    height: 140,
    width: 144,
    position: "absolute",
  },
  contactShadowBox: {
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
    backgroundColor: Color.colorWhite,
  },
  contactPosition: {
    left: 26,
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  contactLayout: {
    width: 303,
    height: 140,
    position: "absolute",
  },
  krithiReddy: {
    top: 56,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    letterSpacing: 0,
    left: 42,
    position: "absolute",
  },
  cava: {
    top: 119,
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    left: 42,
    position: "absolute",
  },
  drunkPercentage: {
    height: 140,
    width: 144,
    position: "absolute",
  },
  text: {
    top: 53,
    fontSize: FontSize.size_11xl,
    fontWeight: "500",
    fontFamily: FontFamily.textMdMedium,
    textAlign: "center",
    width: 94,
    height: 47,
  },
  userPercentageIcon: {
    top: 28,
    left: 30,
    width: 84,
    height: 85,
    position: "absolute",
  },
  percent: {
    left: 201,
    top: 163,
    width: 144,
  },
  contact1: {
    height: 140,
    width: 144,
    position: "absolute",
  },
  contact2: {
    top: 94,
    width: 90,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  contact: {
    top: 163,
    width: 144,
    left: 42,
  },
  contact4: {
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
    backgroundColor: Color.colorWhite,
  },
  contactLocalEmergency: {
    marginTop: 20,
    top: "50%",
    width: 237,
    height: 24,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  contact3: {
    top: 320,
    left: 42,
  },
  phoneIcon: {
    top: 162,
    left: 57,
    width: 46,
    height: 90,
    position: "absolute",
  },
  userModal2: {
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

export default UserModal1;
