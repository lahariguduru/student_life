import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage}>
      <Image
        style={[styles.homePageChild, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <StatusBar1 wifi={require("../assets/wifi.png")} />
      <Text style={[styles.hiSarah, styles.hiSarahTypo]}>Hi, Sarah</Text>
      <Text style={[styles.connected, styles.hiSarahTypo]}>connected</Text>
      <Image
        style={[styles.friendsIcon, styles.generalMapPosition]}
        contentFit="cover"
        source={require("../assets/friends.png")}
      />
      <Image
        style={styles.homePageItem}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Pressable
        style={[styles.me, styles.meShadowBox]}
        onPress={() => navigation.navigate("HeartRate")}
      />
      <View style={[styles.userPercentage, styles.userLayout]}>
        <Image
          style={[styles.userPercentageChild, styles.userLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.userPercentageChild, styles.userLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Text style={styles.text}>45%</Text>
      </View>
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
      <View style={[styles.homePageInner, styles.homePageInnerLayout]} />
      <View style={[styles.rectangleView, styles.homePageInnerLayout]} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    top: 0,
  },
  hiSarahTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    position: "absolute",
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
    borderRadius: Border.br_11xl,
    width: 300,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  userLayout: {
    height: 100,
    width: 100,
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
    fontFamily: FontFamily.textMdMedium,
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
  homePageInnerLayout: {
    width: 59,
    backgroundColor: Color.colorDeeppink_100,
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
  homePageChild: {
    width: 393,
    height: 854,
    position: "absolute",
  },
  hiSarah: {
    top: 82,
    left: 129,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
  },
  connected: {
    top: 121,
    left: 138,
    fontSize: FontSize.size_3xs,
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
  },
  friendsIcon: {
    top: 168,
    height: 80,
  },
  homePageItem: {
    top: 126,
    left: 131,
    width: 5,
    height: 5,
    position: "absolute",
  },
  me: {
    top: 286,
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
  },
  userPercentageChild: {
    left: 0,
    top: 0,
  },
  text: {
    top: 33,
    left: 9,
    fontSize: FontSize.size_11xl,
    width: 82,
    height: 32,
    textAlign: "center",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  userPercentage: {
    top: 324,
    left: 90,
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
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    left: 0,
    top: 0,
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
  homePageInner: {
    top: 694,
  },
  rectangleView: {
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
  homePage: {
    flex: 1,
    height: 852,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default HomePage;
