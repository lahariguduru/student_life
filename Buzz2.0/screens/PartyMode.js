import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PartyMode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.partyMode}>
      <Image
        style={[styles.partyModeChild, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("GeneralMap")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
      </Pressable>
      <StatusBar1
        wifi={require("../assets/wifi.png")}
        batteryRight={0}
        batteryLeft={0}
      />
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
        contentFit="cover"
        source={require("../assets/pj-party-users.png")}
      />
      <Image
        style={styles.exampleUsersIcon}
        contentFit="cover"
        source={require("../assets/example-users.png")}
      />
      <Image
        style={styles.basemapImageIcon}
        contentFit="cover"
        source={require("../assets/basemap-image.png")}
      />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 150,
    width: 150,
    top: 193,
    position: "absolute",
  },
  pmTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  tomorrowPosition: {
    left: 69,
    position: "absolute",
  },
  jan31Typo: {
    top: 386,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
  },
  pjPartyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: 357,
    color: Color.colorBlack,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 206,
  },
  events: {
    top: 54,
    left: 170,
  },
  tomorrow: {
    top: 386,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
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
    top: 0,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorWhite,
  },
  text: {
    marginTop: -11.5,
    marginLeft: -1,
    top: "50%",
    width: 3,
    height: 16,
    left: "50%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
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
  basemapImageIcon: {
    top: 1684,
    left: -1421,
    width: 1118,
    height: 938,
    position: "absolute",
  },
  back: {
    left: 21,
    top: 49,
    width: 23,
    height: 39,
    position: "absolute",
  },
  partyMode: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default PartyMode;
