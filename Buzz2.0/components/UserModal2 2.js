import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Percent from "./Percent";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const UserModal2 = () => {
  return (
    <View style={styles.userModal}>
      <Text style={styles.hollyRodriguez}>Holly Rodriguez</Text>
      <Text style={styles.skyloft}>Skyloft</Text>
      <Percent userPercentage={require("../assets/user-percentage2.png")} />
      <View style={[styles.contact, styles.contactLayout1]}>
        <View style={[styles.contact1, styles.contactShadowBox]} />
        <Text style={[styles.contact2, styles.contactTypo]}>Contact</Text>
      </View>
      <View style={[styles.contact3, styles.contactLayout]}>
        <View style={[styles.contact4, styles.contactLayout]} />
        <Text style={[styles.contactLocalEmergency, styles.contactTypo]}>
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
  contactTypo: {
    left: 26,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  contactLayout: {
    width: 303,
    height: 140,
    position: "absolute",
  },
  hollyRodriguez: {
    top: 56,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    left: 42,
    position: "absolute",
  },
  skyloft: {
    top: 119,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    left: 42,
    position: "absolute",
  },
  contact1: {
    height: 140,
    width: 144,
    position: "absolute",
  },
  contact2: {
    top: 94,
    width: 90,
  },
  contact: {
    top: 163,
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
  userModal: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    width: 393,
    height: 500,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default UserModal2;
