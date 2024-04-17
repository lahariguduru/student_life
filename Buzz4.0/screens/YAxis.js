import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GroupComponent1 from "../components/GroupComponent1";
import FivePercentContainer from "../components/FivePercentContainer";
import GroupComponent2 from "../components/GroupComponent2";
import ArrowComponent from "../components/ArrowComponent";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

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
        source={require("../assets/ellipse-11.png")}
      />
      <Text style={styles.ft}>4 ft</Text>
      <Text style={[styles.ft1, styles.ft1Typo]}>8 ft</Text>
      <Text style={[styles.ft2, styles.ft2Position]}>12 ft</Text>
      <Text style={[styles.ft3, styles.ft1Typo]}>16 ft</Text>
      <Text style={styles.distanceAboveGround}>Distance Above Ground</Text>
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
      <GroupComponent1
        onGroupPressablePress={() => navigation.navigate("HeartRate")}
      />
      <FivePercentContainer
        onGroupPressablePress={() => navigation.navigate("WalkingAsymmetry")}
      />
      <GroupComponent2 />
      <Image
        style={[styles.yAxisChild4, styles.ft2Position]}
        contentFit="cover"
        source={require("../assets/vector-10.png")}
      />
      <ArrowComponent
        arrowComponentPosition="absolute"
        arrowComponentTop={56}
        arrowComponentLeft={30}
        onLocationPress={() => navigation.navigate("GeneralMap")}
        onHomePress={() => navigation.navigate("HomePage")}
        onPlusPress={() => navigation.navigate("PartyMode")}
        onProfilePress={() => navigation.navigate("Profile")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  ft1Typo: {
    textAlign: "left",
    left: 13,
    height: 16,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  ft2Position: {
    top: 242,
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
    height: 16,
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    width: 41,
    position: "absolute",
  },
  ft1: {
    top: 305,
    width: 41,
    textAlign: "left",
    position: "absolute",
  },
  ft2: {
    textAlign: "left",
    left: 13,
    height: 16,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    width: 41,
  },
  ft3: {
    top: 186,
    width: 50,
    position: "absolute",
  },
  distanceAboveGround: {
    marginLeft: -171.5,
    top: 128,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    width: 344,
    height: 47,
    left: "50%",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
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
    width: 370,
    maxHeight: "100%",
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
    width: 370,
    maxHeight: "100%",
    left: 13,
  },
  yAxisChild4: {
    left: 58,
    width: 302,
    height: 149,
  },
  yAxis: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: 852,
  },
});

export default YAxis;
