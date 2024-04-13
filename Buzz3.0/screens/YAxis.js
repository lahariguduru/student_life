import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const YAxis = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.yAxis}
      locations={[0, 0.5, 1]}
      colors={[
        "rgba(255, 212, 146, 0.09)",
        "rgba(255, 247, 172, 0.16)",
        "rgba(206, 247, 255, 0.2)",
      ]}
    >
      <Image
        style={styles.yAxisChild}
        contentFit="cover"
        source={require("../assets/ellipse-111.png")}
      />
      <Text style={[styles.ft, styles.ftLayout]}>4 ft</Text>
      <Text style={[styles.ft1, styles.ft1Typo]}>8 ft</Text>
      <Text style={[styles.ft2, styles.ft2Position]}>12 ft</Text>
      <Text style={styles.ft3}>16 ft</Text>
      <Text style={[styles.distanceAboveGround, styles.textClr]}>
        Distance Above Ground
      </Text>
      <Image
        style={[styles.yAxisItem, styles.axisLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.yAxisInner, styles.axisLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.axisLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.yAxisChild1, styles.axisChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-7.png")}
      />
      <Image
        style={[styles.yAxisChild2, styles.axisChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-6.png")}
      />
      <Image
        style={[styles.yAxisChild3, styles.axisLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Pressable
        style={[styles.contactParent, styles.groupParentLayout]}
        onPress={() => navigation.navigate("HeartRate")}
      >
        <View style={styles.contactShadowBox} />
        <Text style={styles.bpm}>BPM</Text>
        <Text style={[styles.text, styles.textLayout]}>60</Text>
        <Image
          style={[styles.heartIcon, styles.heartIconPosition]}
          contentFit="cover"
          source={require("../assets/heart1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.contactGroup, styles.groupParentLayout]}
        onPress={() => navigation.navigate("WalkingAsymmetry")}
      >
        <View style={styles.contactShadowBox} />
        <Text style={[styles.walkingAsymmetry, styles.ftAboveGroundTypo]}>
          WALKING ASYMMETRY
        </Text>
        <Text style={[styles.text1, styles.ft4Typo]}>5%</Text>
        <Image
          style={styles.walkingIcon}
          contentFit="cover"
          source={require("../assets/walking1.png")}
        />
      </Pressable>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={styles.groupWrapper}>
          <View style={styles.groupWrapper}>
            <View style={styles.contactShadowBox} />
            <Text style={[styles.ftAboveGround, styles.ftAboveGroundTypo]}>
              FT ABOVE GROUND
            </Text>
            <Text style={[styles.ft4, styles.ft4Typo]}>13 ft</Text>
          </View>
        </View>
        <Image
          style={styles.heightIcon}
          contentFit="cover"
          source={require("../assets/height1.png")}
        />
      </View>
      <Image
        style={[styles.yAxisChild4, styles.ft2Position]}
        contentFit="cover"
        source={require("../assets/vector-10.png")}
      />
      <View style={[styles.arrowComponent, styles.heartIconPosition]}>
        <Image
          style={[styles.arrowComponentChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-2.png")}
        />
        <Pressable
          style={styles.location}
          onPress={() => navigation.navigate("GeneralMap")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/location1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.home, styles.homePosition]}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/home1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.plus, styles.plusPosition]}
          onPress={() => navigation.navigate("GroupModal")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/plus.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.profile, styles.homePosition]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  ftLayout: {
    height: 16,
    width: 41,
    color: Color.colorDarkgray,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  ft1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
  },
  ft2Position: {
    top: 242,
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    fontSize: FontSize.size_11xl,
    letterSpacing: 0,
    position: "absolute",
  },
  axisLayout: {
    width: 370,
    maxHeight: "100%",
    position: "absolute",
  },
  axisChildLayout: {
    height: 0,
    width: 393,
    display: "none",
    position: "absolute",
  },
  groupParentLayout: {
    height: 99,
    width: 329,
    left: 33,
    position: "absolute",
  },
  textLayout: {
    height: 40,
    width: 50,
  },
  heartIconPosition: {
    left: 30,
    position: "absolute",
  },
  ftAboveGroundTypo: {
    top: 57,
    height: 13,
    width: 184,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  ft4Typo: {
    top: 24,
    color: Color.colorBlack,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
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
  yAxisChild: {
    top: 396,
    left: 67,
    width: 59,
    height: 59,
    display: "none",
    position: "absolute",
  },
  ft: {
    top: 367,
    left: 2,
    textAlign: "center",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    height: 16,
    width: 41,
    color: Color.colorDarkgray,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  ft1: {
    top: 305,
    left: 13,
    height: 16,
    width: 41,
    color: Color.colorDarkgray,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  ft2: {
    textAlign: "left",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    left: 13,
    height: 16,
    width: 41,
    color: Color.colorDarkgray,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  ft3: {
    top: 186,
    width: 50,
    textAlign: "left",
    left: 13,
    height: 16,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  distanceAboveGround: {
    marginLeft: -171.5,
    top: 128,
    fontFamily: FontFamily.interRegular,
    width: 344,
    height: 47,
    left: "50%",
    fontSize: FontSize.size_11xl,
    textAlign: "center",
  },
  yAxisItem: {
    top: 319,
    marginLeft: -183.5,
    width: 370,
    maxHeight: "100%",
    left: "50%",
  },
  yAxisInner: {
    top: 200,
    marginLeft: -183.5,
    width: 370,
    maxHeight: "100%",
    left: "50%",
  },
  vectorIcon: {
    top: 380,
    left: 13,
  },
  yAxisChild1: {
    top: 530,
    left: -2,
  },
  yAxisChild2: {
    top: 458,
    left: 1,
  },
  yAxisChild3: {
    top: 256,
    left: 13,
  },
  contactShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    height: 99,
    width: 329,
    position: "absolute",
  },
  bpm: {
    top: 59,
    height: 13,
    width: 184,
    color: Color.colorGray_200,
    left: 80,
    textAlign: "left",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  text: {
    top: 26,
    left: 78,
    color: Color.colorBlack,
    fontSize: FontSize.size_11xl,
    letterSpacing: 0,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
  },
  heartIcon: {
    top: 35,
    width: 27,
    height: 27,
  },
  contactParent: {
    top: 452,
  },
  walkingAsymmetry: {
    left: 79,
  },
  text1: {
    left: 77,
    height: 40,
    width: 50,
  },
  walkingIcon: {
    top: 30,
    left: 27,
    width: 35,
    height: 32,
    position: "absolute",
  },
  contactGroup: {
    top: 567,
  },
  ftAboveGround: {
    left: 80,
    top: 57,
  },
  ft4: {
    width: 73,
    left: 78,
  },
  groupWrapper: {
    left: 0,
    top: 0,
    height: 99,
    width: 329,
    position: "absolute",
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
  },
  yAxisChild4: {
    left: 58,
    width: 302,
    height: 149,
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
  icon: {
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
    width: 160,
    height: 39,
  },
  yAxis: {
    backgroundColor: "transparent",
    flex: 1,
    height: 852,
    width: "100%",
  },
});

export default YAxis;
