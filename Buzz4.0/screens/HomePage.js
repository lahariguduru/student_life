import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.homePage}
      locations={[0, 0.73, 1]}
      colors={[
        "rgba(255, 146, 148, 0.09)",
        "rgba(255, 247, 172, 0.16)",
        "rgba(206, 247, 255, 0.2)",
      ]}
    >
      <Pressable
        style={styles.hiSarah}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={[styles.hiSarah1, styles.hiSarah1Typo]}>Hi, Sarah</Text>
      </Pressable>
      <Text style={[styles.connected, styles.hiSarah1Typo]}>connected</Text>
      <Image
        style={[styles.friendsIcon, styles.generalMapPosition]}
        contentFit="cover"
        source={require("../assets/friends.png")}
      />
      <Image
        style={styles.homePageChild}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Pressable
        style={[styles.me, styles.meShadowBox]}
        onPress={() => navigation.navigate("HeartRate")}
      />
      <Pressable
        style={styles.percent}
        onPress={() => navigation.navigate("HeartRate")}
      >
        <View style={styles.drunkPercentage} />
        <Text style={styles.text}>45%</Text>
        <Image
          style={styles.userPercentageIcon}
          contentFit="cover"
          source={require("../assets/user-percentage.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.generalMap, styles.generalMapPosition]}
        onPress={() => navigation.navigate("GeneralMap")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/general-map.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.contact, styles.meShadowBox]}
        onPress={() => navigation.navigate("PartyMode")}
      />
      <Text style={[styles.pjParty, styles.pjPartyTypo]}>PJ Party</Text>
      <Text style={[styles.netEvent, styles.pjPartyTypo]}>Net Event</Text>
      <Image
        style={styles.heartIcon}
        contentFit="cover"
        source={require("../assets/heart.png")}
      />
      <View style={styles.bpmWrapper}>
        <Text style={styles.bpm}>60 bpm</Text>
      </View>
      <Image
        style={styles.walkingIcon}
        contentFit="cover"
        source={require("../assets/walking.png")}
      />
      <Text style={[styles.text1, styles.ftTypo]}>{`5% `}</Text>
      <Text style={[styles.ft, styles.ftTypo]}>5ft</Text>
      <Image
        style={styles.heightIcon}
        contentFit="cover"
        source={require("../assets/height.png")}
      />
      <Image
        style={[styles.userEIcon, styles.userEIconLayout]}
        contentFit="cover"
        source={require("../assets/user-e.png")}
      />
      <View style={[styles.homePageItem, styles.homeLayout]} />
      <View style={[styles.homePageInner, styles.homeLayout]} />
      <Text style={[styles.text2, styles.textTypo]}>1/22</Text>
      <Text style={[styles.text3, styles.textTypo]}>1/31</Text>
      <Image
        style={[styles.sWhiteAuraLime, styles.userEIconLayout]}
        contentFit="cover"
        source={require("../assets/s-white--aura-lime.png")}
      />
      <Image
        style={[styles.gWhiteAuraSunrise, styles.userAIconLayout]}
        contentFit="cover"
        source={require("../assets/g-white--aura-sunrise.png")}
      />
      <Image
        style={[styles.userAIcon, styles.userAIconLayout]}
        contentFit="cover"
        source={require("../assets/user-a.png")}
      />
      <Image
        style={[styles.plusMathIcon, styles.plusIconLayout]}
        contentFit="cover"
        source={require("../assets/plus-math.png")}
      />
      <Image
        style={[styles.plusMathIcon1, styles.plusIconLayout]}
        contentFit="cover"
        source={require("../assets/plus-math.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  hiSarah1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
  },
  generalMapPosition: {
    width: 300,
    left: 47,
    position: "absolute",
  },
  meShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
    width: 300,
    position: "absolute",
  },
  pjPartyTypo: {
    fontSize: FontSize.size_xl,
    left: 141,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  ftTypo: {
    width: 52,
    left: 266,
    fontSize: FontSize.size_mini,
    height: 22,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  userEIconLayout: {
    overflow: "hidden",
    height: 25,
    width: 25,
    borderRadius: Border.br_981xl,
    left: 282,
    position: "absolute",
  },
  homeLayout: {
    width: 59,
    backgroundColor: Color.colorDeeppink,
    left: 68,
    height: 25,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
    left: 84,
    textAlign: "center",
    position: "absolute",
  },
  userAIconLayout: {
    left: 261,
    overflow: "hidden",
    height: 25,
    width: 25,
    borderRadius: Border.br_981xl,
    position: "absolute",
  },
  plusIconLayout: {
    height: 13,
    width: 13,
    left: 311,
    position: "absolute",
  },
  hiSarah1: {
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
  },
  hiSarah: {
    left: 129,
    top: 82,
    position: "absolute",
  },
  connected: {
    top: 121,
    left: 138,
    fontSize: FontSize.size_3xs,
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  friendsIcon: {
    top: 168,
    height: 80,
  },
  homePageChild: {
    top: 126,
    left: 131,
    width: 5,
    height: 5,
    position: "absolute",
  },
  me: {
    top: 283,
    height: 175,
    left: 47,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
  },
  drunkPercentage: {
    left: 0,
    top: 0,
    height: 140,
    width: 144,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  text: {
    top: 53,
    left: 26,
    fontSize: FontSize.size_11xl,
    width: 94,
    height: 47,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  userPercentageIcon: {
    top: 28,
    left: 30,
    width: 84,
    height: 85,
    position: "absolute",
  },
  percent: {
    top: 300,
    left: 69,
    height: 140,
    width: 144,
    position: "absolute",
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_11xl,
    width: "100%",
  },
  generalMap: {
    top: 505,
    height: 123,
  },
  contact: {
    top: 674,
    left: 45,
    height: 120,
  },
  pjParty: {
    top: 695,
  },
  netEvent: {
    top: 749,
  },
  heartIcon: {
    marginLeft: 40.5,
    top: 330,
    left: "50%",
    width: 20,
    height: 28,
    position: "absolute",
  },
  bpm: {
    fontSize: FontSize.size_mini,
    height: 22,
    width: 63,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  bpmWrapper: {
    top: 333,
    left: 265,
    height: 22,
    width: 63, 
    position: "absolute",
  },
  walkingIcon: {
    top: 360,
    left: 234,
    width: 26,
    height: 35,
    position: "absolute",
  },
  text1: {
    top: 370,
  },
  ft: {
    top: 405,
  },
  heightIcon: {
    top: 397,
    left: 235,
    width: 23,
    height: 34,
    position: "absolute",
  },
  userEIcon: {
    top: 695,
  },
  homePageItem: {
    top: 694,
  },
  homePageInner: {
    top: 748,
  },
  text2: {
    top: 700,
  },
  text3: {
    top: 754,
  },
  sWhiteAuraLime: {
    top: 752,
  },
  gWhiteAuraSunrise: {
    top: 752,
  },
  userAIcon: {
    top: 695,
  },
  plusMathIcon: {
    top: 765,
  },
  plusMathIcon1: {
    top: 708,
  },
  homePage: {
    backgroundColor: "transparent",
    flex: 1,
    height: 852,
    width: "100%",
  },
});

export default HomePage;
