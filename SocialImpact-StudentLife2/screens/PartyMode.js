import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PartyMode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.partyMode}>
      <Image
        style={[styles.partyModeChild, styles.partyLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.partyModeItem, styles.partyLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.borderPosition]}
            resizeMode="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={[styles.capacity, styles.borderPosition]} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
      </View>
      <Text style={[styles.events, styles.pmTypo]}>EVENTS</Text>
      <Text style={[styles.tomorrow, styles.tomorrowPosition]}>TOMORROW</Text>
      <Text style={[styles.pm, styles.pmTypo]}>10PM</Text>
      <Text style={[styles.jan31, styles.jan31Typo]}>JAN 31</Text>
      <Text style={[styles.pm1, styles.pmTypo]}>9PM</Text>
      <Text style={[styles.pjParty, styles.pjPartyTypo]}>PJ Party</Text>
      <Text style={[styles.netEvent, styles.pjPartyTypo]}>Net Event</Text>
      <Pressable
        style={[styles.bApple, styles.appleShadowBox]}
        onPress={() => navigation.navigate("GroupModal")}
      >
        <View style={[styles.apple, styles.appleShadowBox]} />
        <Text style={styles.text}>+</Text>
      </Pressable>
      <Image
        style={[styles.pjPartyUsers, styles.tomorrowPosition]}
        resizeMode="cover"
        source={require("../assets/pj-party-users.png")}
      />
      <Image
        style={styles.exampleUsersIcon}
        resizeMode="cover"
        source={require("../assets/example-users.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  partyLayout: {
    height: 150,
    width: 150,
    top: 193,
    position: "absolute",
  },
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  pmTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  tomorrowPosition: {
    left: 69,
    position: "absolute",
  },
  jan31Typo: {
    top: 386,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.colorBlack,
  },
  pjPartyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    top: 357,
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  appleShadowBox: {
    height: 55,
    width: 100,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    position: "absolute",
  },
  partyModeChild: {
    left: 36,
  },
  partyModeItem: {
    left: 206,
  },
  time: {
    marginTop: -7.5,
    left: 21,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 54,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    marginTop: -1.95,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
  },
  capacity: {
    marginTop: -3.65,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorBlack,
    width: 18,
    height: 7,
  },
  battery: {
    marginTop: -4.2,
    right: 14,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  statusBar: {
    left: 0,
    height: 47,
    right: 0,
    top: 0,
    position: "absolute",
  },
  events: {
    top: 54,
    left: 170,
  },
  tomorrow: {
    top: 386,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.colorBlack,
  },
  pm: {
    top: 402,
    left: 93,
  },
  jan31: {
    left: 258,
    position: "absolute",
  },
  pm1: {
    top: 405,
    left: 266,
  },
  pjParty: {
    left: 73,
  },
  netEvent: {
    left: 240,
  },
  apple: {
    marginLeft: -50,
    borderRadius: Border.br_16xl,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  text: {
    marginTop: -11.5,
    marginLeft: -1,
    width: 3,
    height: 16,
    left: "50%",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
    textAlign: "center",
    color: Color.colorBlack,
    top: "50%",
    position: "absolute",
  },
  bApple: {
    marginLeft: -49.5,
    top: 746,
  },
  pjPartyUsers: {
    top: 239,
    width: 80,
    height: 67,
  },
  exampleUsersIcon: {
    top: 234,
    left: 225,
    width: 111,
    height: 75,
    position: "absolute",
  },
  partyMode: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default PartyMode;
