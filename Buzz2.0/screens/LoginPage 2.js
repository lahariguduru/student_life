import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import StatusBar1 from "../components/StatusBar1";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const LoginPage = () => {
  return (
    <LinearGradient
      style={styles.loginPage}
      locations={[0, 1, 1]}
      colors={["#fff", "#fff", "#c47093"]}
    >
      <StatusBar1
        wifi={require("../assets/wifi.png")}
        batteryRight={3}
        batteryLeft={-3}
      />
      <View style={[styles.bApple, styles.bAppleShadowBox]}>
        <View style={styles.appleShadowBox} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.continueWithApple, styles.continueTypo]}>
          CONTINUE WITH APPLE
        </Text>
      </View>
      <View style={[styles.bGoogle, styles.bAppleShadowBox]}>
        <View style={styles.appleShadowBox} />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition1]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconPosition1]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Text style={[styles.continueWithApple, styles.continueTypo]}>
          CONTINUE WITH GOOGLE
        </Text>
      </View>
      <View style={[styles.bEmail, styles.bAppleShadowBox]}>
        <View style={styles.appleShadowBox} />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.continueWithEmail, styles.continueTypo]}>
          CONTINUE WITH EMAIL
        </Text>
      </View>
      <Text style={styles.getStartedWithContainer}>
        <Text style={styles.getStartedWith}>{`Get Started with `}</Text>
        <Text style={styles.buzz}>BUZZ</Text>
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bAppleShadowBox: {
    height: 56,
    width: 320,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    marginLeft: -160.5,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  continueTypo: {
    textAlign: "center",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    left: 81,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  vectorIconPosition1: {
    right: "85.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "6.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  appleShadowBox: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_16xl,
    top: 0,
    marginLeft: -160,
    height: 56,
    width: 320,
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
  vectorIcon: {
    height: "49.82%",
    width: "7.34%",
    top: "25%",
    right: "86.41%",
    bottom: "25.18%",
    left: "6.25%",
  },
  continueWithApple: {
    top: 20,
  },
  bApple: {
    top: 609,
  },
  vectorIcon1: {
    height: "44.64%",
    left: "6.41%",
    bottom: "27.68%",
    top: "27.68%",
    width: "7.81%",
  },
  vectorIcon2: {
    height: "17.32%",
    width: "6.13%",
    right: "87.03%",
    bottom: "55%",
    top: "27.68%",
  },
  vectorIcon3: {
    height: "17.86%",
    width: "6.09%",
    top: "54.46%",
    right: "87.06%",
    bottom: "27.68%",
  },
  vectorIcon4: {
    height: "21.07%",
    width: "3.91%",
    top: "45.54%",
    bottom: "33.39%",
    left: "10.31%",
  },
  bGoogle: {
    top: 679,
  },
  vectorIcon5: {
    height: "35.71%",
    top: "32.14%",
    right: "85.63%",
    bottom: "32.14%",
    left: "6.56%",
    width: "7.81%",
  },
  continueWithEmail: {
    top: 22,
  },
  bEmail: {
    top: 749,
  },
  getStartedWith: {
    color: Color.colorBlack,
  },
  buzz: {
    color: Color.colorDeeppink_100,
  },
  getStartedWithContainer: {
    top: 340,
    left: 18,
    fontSize: FontSize.size_13xl,
    letterSpacing: 0,
    textTransform: "capitalize",
    textAlign: "left",
    width: 266,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  loginPage: {
    flex: 1,
    width: "100%",
    height: 852,
    display: "none",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default LoginPage;
