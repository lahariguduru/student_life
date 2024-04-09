import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const YAxis = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yAxis}>
      <Image
        style={styles.yAxisChild}
        contentFit="cover"
        source={require("../assets/ellipse-111.png")}
      />
      <StatusBar1
        wifi={require("../assets/wifi1.png")}
        batteryRight={3}
        batteryLeft={-3}
      />
      <StatusBar1
        wifi={require("../assets/wifi1.png")}
        batteryRight={3}
        batteryLeft={-3}
      />
      <Text style={[styles.ft, styles.ftTypo]}>4 ft</Text>
      <Text style={[styles.ft1, styles.ftTypo]}>8 ft</Text>
      <Text style={[styles.ft2, styles.ft2Position]}>12 ft</Text>
      <Text style={styles.ft3}>16 ft</Text>
      <Text style={[styles.distanceAboveGround, styles.textTypo]}>
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
          style={styles.heartIcon}
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
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <Image
        style={[styles.yAxisChild4, styles.ft2Position]}
        contentFit="cover"
        source={require("../assets/vector-10.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ftTypo: {
    height: 16,
    width: 41,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  ft2Position: {
    top: 242,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
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
    position: "absolute",
  },
  ft1: {
    top: 305,
    textAlign: "left",
    left: 13,
    position: "absolute",
  },
  ft2: {
    textAlign: "left",
    left: 13,
    height: 16,
    width: 41,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
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
    top: 107,
    left: 18,
    width: 344,
    height: 47,
    textAlign: "center",
  },
  yAxisItem: {
    top: 319,
    left: "50%",
    marginLeft: -183.5,
    width: 370,
    maxHeight: "100%",
  },
  yAxisInner: {
    top: 200,
    left: "50%",
    marginLeft: -183.5,
    width: 370,
    maxHeight: "100%",
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
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    height: 99,
    width: 329,
    position: "absolute",
    backgroundColor: Color.colorWhite,
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
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
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
  backIcon: {
    top: 47,
    left: 12,
    width: 23,
    height: 39,
    position: "absolute",
  },
  yAxisChild4: {
    left: 58,
    width: 302,
    height: 149,
  },
  yAxis: {
    flex: 1,
    width: "100%",
    height: 852,
    backgroundColor: Color.colorWhite,
  },
});

export default YAxis;
