import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.fWhiteAuraSquencesParent}>
      <Image
        style={[styles.fWhiteAuraSquences, styles.whiteLayout]}
        contentFit="cover"
        source={require("../assets/f-white--aura-squences.png")}
      />
      <Image
        style={[styles.kWhiteAuraAfternoon, styles.whiteLayout]}
        contentFit="cover"
        source={require("../assets/k-white--aura-afternoon.png")}
      />
      <Image
        style={[styles.gWhiteAuraSunrise, styles.whiteLayout]}
        contentFit="cover"
        source={require("../assets/g-white--aura-sunrise1.png")}
      />
      <Image
        style={[styles.sWhiteAuraLime, styles.whiteLayout]}
        contentFit="cover"
        source={require("../assets/s-white--aura-lime1.png")}
      />
      <Image
        style={[styles.hWhiteAuraSweet, styles.whiteLayout]}
        contentFit="cover"
        source={require("../assets/h-white--aura-sweet.png")}
      />
      <Text style={styles.iconsToExport}>Icons to export (for Tech use):</Text>
      <Text
        style={[styles.graysonSmithAt, styles.faithWilsonAtTypo]}
      >{`Grayson Smith
At 26 West`}</Text>
      <Text
        style={[styles.faithWilsonAt, styles.faithWilsonAtTypo]}
      >{`Faith Wilson
At Skyloft`}</Text>
      <Text
        style={[styles.sarahLeeWalking, styles.faithWilsonAtTypo]}
      >{`Sarah Lee
Walking along Guad`}</Text>
      <Text
        style={[styles.krithiReddyAt, styles.faithWilsonAtTypo]}
      >{`Krithi Reddy
At Cava`}</Text>
      <Text
        style={[styles.hollyRodriguezAt, styles.faithWilsonAtTypo]}
      >{`Holly Rodriguez
At Skyloft`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  whiteLayout: {
    height: 40,
    width: 40,
    borderRadius: Border.br_981xl,
    left: 28,
    position: "absolute",
    overflow: "hidden",
  },
  faithWilsonAtTypo: {
    height: 33,
    width: 164,
    left: 84,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  fWhiteAuraSquences: {
    top: 132,
  },
  kWhiteAuraAfternoon: {
    top: 289,
  },
  gWhiteAuraSunrise: {
    top: 58,
  },
  sWhiteAuraLime: {
    top: 215,
  },
  hWhiteAuraSweet: {
    top: 363,
  },
  iconsToExport: {
    top: 20,
    left: 17,
    width: 315,
    height: 69,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  graysonSmithAt: {
    top: 62,
  },
  faithWilsonAt: {
    top: 136,
  },
  sarahLeeWalking: {
    top: 219,
  },
  krithiReddyAt: {
    top: 293,
  },
  hollyRodriguezAt: {
    top: 367,
  },
  fWhiteAuraSquencesParent: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 582,
    overflow: "hidden",
  },
});

export default Frame;
