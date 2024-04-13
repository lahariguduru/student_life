import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PartyMode = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.partyMode}
      locations={[0, 0.5, 1]}
      colors={[
        "rgba(255, 212, 146, 0.09)",
        "rgba(255, 247, 172, 0.16)",
        "rgba(206, 247, 255, 0.2)",
      ]}
    >
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
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
      </Pressable>
      <Text style={[styles.may1, styles.pmTypo]}>May 1</Text>
      <View style={styles.partyModeItem} />
      <Text style={[styles.pm, styles.pmTypo]}>10PM</Text>
      <Text style={[styles.today, styles.pmTypo]}>TODAY</Text>
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
        style={styles.pjPartyUsers}
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
        source={require("../assets/basemap-image1.png")}
      />
      <View style={styles.arrowComponent}>
        <Image
          style={[styles.arrowComponentChild, styles.icon1Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-2.png")}
        />
        <Pressable
          style={styles.location}
          onPress={() => navigation.navigate("GeneralMap")}
        >
          <Image
            style={[styles.icon1, styles.icon1Layout]}
            contentFit="cover"
            source={require("../assets/location1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.home, styles.homePosition]}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            style={[styles.icon1, styles.icon1Layout]}
            contentFit="cover"
            source={require("../assets/home1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.plus, styles.plusPosition]}
          onPress={() => navigation.navigate("GroupModal")}
        >
          <Image
            style={[styles.icon1, styles.icon1Layout]}
            contentFit="cover"
            source={require("../assets/plus.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.profile, styles.homePosition]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon1, styles.icon1Layout]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
        </Pressable>
      </View>
    </LinearGradient>
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
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    width: 100,
    position: "absolute",
  },
  icon1Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  homePosition: {
    height: "58.97%",
    bottom: "23.08%",
    top: "17.95%",
    position: "absolute",
  },
  plusPosition: {
    bottom: "15.38%",
    top: "7.69%",
    height: "76.92%",
    position: "absolute",
  },
  partyModeChild: {
    left: 36,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 206,
  },
  may1: {
    top: 384,
    left: 93,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
  },
  partyModeItem: {
    top: 342,
    left: 66,
    height: 100,
    width: 100,
    position: "absolute",
    overflow: "hidden",
  },
  pm: {
    top: 402,
    left: 93,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
  },
  today: {
    top: 386,
    left: 258,
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
    left: 69,
    width: 80,
    height: 67,
    position: "absolute",
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
  arrowComponentChild: {
    width: "83.75%",
    right: "16.25%",
    left: "0%",
    borderRadius: Border.br_11xl,
    bottom: "15.38%",
    top: "7.69%",
    height: "76.92%",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  location: {
    left: "43.75%",
    top: "15.38%",
    right: "40.63%",
    bottom: "20.51%",
    height: "64.1%",
    width: "15.63%",
    position: "absolute",
  },
  home: {
    left: "25.63%",
    right: "58.75%",
    width: "15.63%",
  },
  plus: {
    left: "61.25%",
    right: "20%",
    width: "18.75%",
  },
  profile: {
    left: "6.25%",
    right: "79.38%",
    width: "14.38%",
  },
  arrowComponent: {
    top: 56,
    left: 30,
    width: 160,
    height: 39,
    position: "absolute",
  },
  partyMode: {
    backgroundColor: "transparent",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default PartyMode;
