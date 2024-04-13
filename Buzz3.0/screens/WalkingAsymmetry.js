import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const WalkingAsymmetry = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.walkingAsymmetry}
      locations={[0, 0.5, 1]}
      colors={[
        "rgba(255, 212, 146, 0.09)",
        "rgba(255, 247, 172, 0.16)",
        "rgba(206, 247, 255, 0.2)",
      ]}
    >
      <Image
        style={styles.walkingAsymmetryChild}
        contentFit="cover"
        source={require("../assets/ellipse-111.png")}
      />
      <Text style={styles.text}>3%</Text>
      <Text style={[styles.text1, styles.textTypo]}>6%</Text>
      <Text style={[styles.text2, styles.textTypo]}>9%</Text>
      <Text style={styles.text3}>12%</Text>
      <Image
        style={[styles.walkingAsymmetryItem, styles.walkingLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.walkingAsymmetryInner, styles.walkingLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.walkingLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.walkingAsymmetryChild1, styles.walkingChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-7.png")}
      />
      <Image
        style={[styles.walkingAsymmetryChild2, styles.walkingChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-6.png")}
      />
      <Image
        style={[styles.walkingAsymmetryChild3, styles.walkingLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Pressable
        style={[styles.contactParent, styles.groupParentLayout]}
        onPress={() => navigation.navigate("HeartRate")}
      >
        <View style={styles.contactShadowBox} />
        <Text style={styles.bpm}>BPM</Text>
        <Text style={[styles.text4, styles.textLayout]}>60</Text>
        <Image
          style={[styles.heartIcon, styles.heartIconPosition]}
          contentFit="cover"
          source={require("../assets/heart1.png")}
        />
      </Pressable>
      <View style={[styles.contactGroup, styles.groupParentLayout]}>
        <View style={styles.contactShadowBox} />
        <Text style={[styles.walkingAsymmetry1, styles.ftAboveGroundTypo]}>
          WALKING ASYMMETRY
        </Text>
        <Text style={[styles.text5, styles.ftTypo]}>5%</Text>
        <Image
          style={styles.walkingIcon}
          contentFit="cover"
          source={require("../assets/walking1.png")}
        />
      </View>
      <Pressable
        style={[styles.groupParent, styles.groupParentLayout]}
        onPress={() => navigation.navigate("YAxis")}
      >
        <View style={styles.groupWrapper}>
          <View style={styles.groupWrapper}>
            <View style={styles.contactShadowBox} />
            <Text style={[styles.ftAboveGround, styles.ftAboveGroundTypo]}>
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
      </Pressable>
      <Image
        style={styles.walkingAsymmetryChild4}
        contentFit="cover"
        source={require("../assets/vector-9.png")}
      />
      <Text style={[styles.walkingAsymmetry2, styles.text4Clr]}>
        Walking Asymmetry
      </Text>
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
  textTypo: {
    textAlign: "left",
    left: 13,
    height: 16,
    width: 41,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  walkingLayout: {
    width: 370,
    maxHeight: "100%",
    position: "absolute",
  },
  walkingChildLayout: {
    height: 0,
    width: 393,
    display: "none",
    position: "absolute",
  },
  groupParentLayout: {
    height: 99,
    width: 329,
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
  ftTypo: {
    top: 24,
    color: Color.colorBlack,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  text4Clr: {
    color: Color.colorBlack,
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
  walkingAsymmetryChild: {
    top: 396,
    left: 67,
    width: 59,
    height: 59,
    display: "none",
    position: "absolute",
  },
  text: {
    top: 367,
    left: 2,
    height: 16,
    width: 41,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    position: "absolute",
  },
  text1: {
    top: 305,
  },
  text2: {
    top: 242,
  },
  text3: {
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
  walkingAsymmetryItem: {
    top: 319,
    left: "50%",
    marginLeft: -183.5,
    maxHeight: "100%",
  },
  walkingAsymmetryInner: {
    top: 200,
    left: "50%",
    marginLeft: -183.5,
    maxHeight: "100%",
  },
  vectorIcon: {
    top: 380,
    maxHeight: "100%",
    left: 13,
  },
  walkingAsymmetryChild1: {
    top: 530,
    left: -2,
  },
  walkingAsymmetryChild2: {
    top: 458,
    left: 1,
  },
  walkingAsymmetryChild3: {
    top: 256,
    maxHeight: "100%",
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
  text4: {
    top: 26,
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
    fontSize: FontSize.size_11xl,
    height: 40,
    left: 78,
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
    left: 33,
    width: 329,
  },
  walkingAsymmetry1: {
    left: 79,
  },
  text5: {
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
    left: 33,
    width: 329,
  },
  ftAboveGround: {
    left: 80,
    top: 57,
  },
  ft: {
    width: 73,
    left: 78,
    top: 24,
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
    left: 32,
  },
  walkingAsymmetryChild4: {
    top: 338,
    left: 40,
    width: 338,
    height: 49,
    position: "absolute",
  },
  walkingAsymmetry2: {
    marginLeft: -158.5,
    top: 128,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interRegular,
    width: 318,
    height: 47,
    left: "50%",
    color: Color.colorBlack,
    textAlign: "center",
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
  walkingAsymmetry: {
    backgroundColor: "transparent",
    flex: 1,
    height: 852,
    width: "100%",
  },
});

export default WalkingAsymmetry;
