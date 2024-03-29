import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const UserModal = ({ onClose }) => {
  return (
    <View style={styles.userModal}>
      <Text style={styles.janeDoe}>Jane Doe</Text>
      <Text style={styles.janeDoe}>Jane Doe</Text>
      <Text style={[styles.voodooDonuts, styles.contactTypo]}>
        Voodoo Donuts
      </Text>
      <View style={[styles.percent, styles.contactLayout1]}>
        <View style={[styles.drunkPercentage, styles.contactShadowBox]} />
        <Text style={[styles.text, styles.textPosition]}>45%</Text>
        <Image
          style={styles.userPercentageIcon}
          resizeMode="cover"
          source={require("../assets/user-percentage1.png")}
        />
      </View>
      <View style={[styles.contact, styles.contactLayout1]}>
        <View style={[styles.contact1, styles.contactShadowBox]} />
        <Text style={[styles.contact2, styles.textPosition]}>Contact</Text>
      </View>
      <View style={[styles.contact3, styles.contactLayout]}>
        <View style={[styles.contact4, styles.contactLayout]} />
        <Text style={[styles.contactLocalEmergency, styles.contactTypo]}>
          Contact Local Emergency
        </Text>
      </View>
      <Image
        style={styles.userModalChild}
        resizeMode="cover"
        source={require("../assets/group-2.png")}
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
    width: 146,
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
  textPosition: {
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
  janeDoe: {
    top: 56,
    fontSize: FontSize.size_26xl,
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
    position: "absolute",
    left: 42,
  },
  drunkPercentage: {
    height: 140,
    width: 146,
    position: "absolute",
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
    top: 171,
    width: 146,
  },
  contact1: {
    height: 140,
    width: 146,
    position: "absolute",
  },
  contact2: {
    top: 100,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  contact: {
    top: 171,
    width: 146,
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
    top: 93,
    left: 23,
    width: 237,
    height: 24,
    color: Color.colorBlack,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  contact3: {
    top: 320,
    left: 42,
  },
  userModalChild: {
    top: 164,
    left: 62,
    width: 40,
    height: 100,
    position: "absolute",
  },
  userModal: {
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

export default UserModal;
