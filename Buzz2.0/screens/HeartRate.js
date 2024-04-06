import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HeartRate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.heartRate}>
      <Image
        style={styles.heartRateChild}
        contentFit="cover"
        source={require("../assets/ellipse-111.png")}
      />
      <StatusBar1
        wifi={require("../assets/wifi.png")}
        batteryRight={3}
        batteryLeft={-3}
      />
      <StatusBar1
        wifi={require("../assets/wifi.png")}
        batteryRight={3}
        batteryLeft={-3}
      />
      <Text style={[styles.bpm, styles.bpmTypo1]}>40 bpm</Text>
      <Text style={[styles.bpm1, styles.bpmTypo]}>60 bpm</Text>
      <Text style={[styles.bpm2, styles.bpmTypo]}>80 bpm</Text>
      <Text style={[styles.bpm3, styles.bpm3Layout]}>100 bpm</Text>
      <Text style={[styles.heartRate1, styles.textTypo1]}>Heart rate</Text>
      <Image
        style={[styles.heartRateItem, styles.heartLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.heartRateInner, styles.heartLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.heartLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.heartRateChild1, styles.heartChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-7.png")}
      />
      <Image
        style={[styles.heartRateChild2, styles.heartChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-6.png")}
      />
      <Image
        style={[styles.heartRateChild3, styles.heartLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={styles.heartRateChild4}
        contentFit="cover"
        source={require("../assets/vector-8.png")}
      />
      <View style={[styles.contactParent, styles.groupParentLayout]}>
        <View style={styles.contactShadowBox} />
        <Text style={styles.bpm4}>BPM</Text>
        <Text style={[styles.text, styles.textTypo1]}>60</Text>
        <Image
          style={styles.heartIcon}
          contentFit="cover"
          source={require("../assets/heart1.png")}
        />
      </View>
      <Pressable
        style={[styles.contactGroup, styles.groupParentLayout]}
        onPress={() => navigation.navigate("WalkingAsymmetry")}
      >
        <View style={styles.contactShadowBox} />
        <Text style={[styles.walkingAsymmetry, styles.ftAboveGroundTypo]}>
          WALKING ASYMMETRY
        </Text>
        <Text style={[styles.text1, styles.textTypo]}>5%</Text>
        <Image
          style={styles.walkingIcon}
          contentFit="cover"
          source={require("../assets/walking1.png")}
        />
      </Pressable>
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
            <Text style={[styles.text2, styles.textTypo]}>13</Text>
          </View>
        </View>
        <Image
          style={styles.heightIcon}
          contentFit="cover"
          source={require("../assets/height1.png")}
        />
      </Pressable>
      <Image
        style={[styles.backIcon, styles.backIconLayout]}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <View style={[styles.rectangleView, styles.plusPosition]} />
      <Image
        style={[styles.backIcon1, styles.backIconLayout]}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <Pressable
        style={[styles.location, styles.homeLayout]}
        onPress={() => navigation.navigate("GeneralMap")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/location1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.home, styles.homeLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/home1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.plus, styles.plusPosition]}
        onPress={() => navigation.navigate("GroupModal")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/plus.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bpmTypo1: {
    height: 16,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  bpmTypo: {
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
  bpm3Layout: {
    width: 50,
    textAlign: "left",
  },
  textTypo1: {
    color: Color.colorBlack,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  heartLayout: {
    width: 370,
    maxHeight: "100%",
    position: "absolute",
  },
  heartChildLayout: {
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
  textTypo: {
    top: 24,
    color: Color.colorBlack,
    fontSize: FontSize.size_11xl,
    width: 50,
    textAlign: "left",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  backIconLayout: {
    height: 39,
    width: 23,
    top: 47,
    position: "absolute",
  },
  plusPosition: {
    top: 51,
    height: 30,
    position: "absolute",
  },
  homeLayout: {
    height: 25,
    width: 25,
    top: 54,
    position: "absolute",
  },
  heartRateChild: {
    top: 396,
    left: 67,
    width: 59,
    height: 59,
    display: "none",
    position: "absolute",
  },
  bpm: {
    top: 367,
    left: 10,
    width: 41,
    height: 16,
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  bpm1: {
    top: 305,
  },
  bpm2: {
    top: 242,
  },
  bpm3: {
    top: 186,
    left: 13,
    height: 16,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
    width: 50,
  },
  heartRate1: {
    top: 107,
    left: 18,
    width: 168,
    height: 47,
    textAlign: "center",
    fontSize: FontSize.size_11xl,
  },
  heartRateItem: {
    top: 319,
    left: "50%",
    marginLeft: -183.5,
    maxHeight: "100%",
  },
  heartRateInner: {
    top: 200,
    left: "50%",
    marginLeft: -183.5,
    maxHeight: "100%",
  },
  vectorIcon: {
    top: 380,
    left: 13,
  },
  heartRateChild1: {
    top: 530,
    left: -2,
  },
  heartRateChild2: {
    top: 458,
    left: 1,
  },
  heartRateChild3: {
    top: 256,
    left: 13,
  },
  heartRateChild4: {
    top: 190,
    left: 54,
    width: 309,
    height: 206,
    position: "absolute",
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
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    height: 99,
    width: 329,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  bpm4: {
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
    height: 40,
    left: 78,
    width: 50,
    textAlign: "left",
  },
  heartIcon: {
    top: 35,
    left: 30,
    width: 27,
    height: 27,
    position: "absolute",
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
  text2: {
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
    height: 30,
    width: 30,
    position: "absolute",
  },
  groupParent: {
    top: 682,
  },
  backIcon: {
    left: 12,
  },
  rectangleView: {
    left: 49,
    borderRadius: Border.br_11xl,
    backgroundColor: "rgba(255, 0, 107, 0.15)",
    width: 160,
  },
  backIcon1: {
    left: 56,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  location: {
    left: 136,
  },
  home: {
    left: 97,
  },
  plus: {
    left: 171,
    width: 30,
    top: 51,
  },
  heartRate: {
    flex: 1,
    height: 852,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default HeartRate;
