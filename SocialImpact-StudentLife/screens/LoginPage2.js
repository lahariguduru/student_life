import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const LoginPage2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPage}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.borderPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.borderPosition]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
      </View>
      <Pressable
        style={[styles.bApple, styles.bAppleShadowBox]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <View style={styles.emailPosition} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Text style={[styles.continueWithApple, styles.continueTypo]}>
          CONTINUE WITH APPLE
        </Text>
      </Pressable>
      <View style={[styles.bGoogle, styles.bAppleShadowBox]}>
        <View style={styles.emailPosition} />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition1]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
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
        <View style={[styles.apple, styles.emailPosition]} />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
        <Text style={[styles.continueWithEmail, styles.continueTypo]}>
          CONTINUE WITH EMAIL
        </Text>
      </View>
      <Text style={[styles.getStartedWithContainer, styles.continueTypo]}>
        <Text style={styles.getStartedWith}>{`Get Started with `}</Text>
        <Text style={styles.buzz}>BUZZ</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  bAppleShadowBox: {
    height: 56,
    width: 320,
    left: "50%",
    marginLeft: -161.5,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  continueTypo: {
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
  emailPosition: {
    borderRadius: Border.br_16xl,
    marginLeft: -160,
    height: 56,
    width: 320,
    left: "50%",
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  time: {
    marginTop: -7.5,
    left: 21,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 54,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    marginTop: -1.95,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    marginTop: -3.65,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorBlack,
    width: 18,
    height: 7,
  },
  battery: {
    marginTop: -4.2,
    right: 14,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  statusBar: {
    right: 3,
    left: -3,
    height: 47,
    top: 0,
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
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    left: 81,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorBlack,
  },
  bApple: {
    top: 596,
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
    top: 666,
  },
  apple: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_16xl,
    marginLeft: -160,
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
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    left: 81,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorBlack,
  },
  bEmail: {
    top: 736,
  },
  getStartedWith: {
    color: Color.colorBlack,
  },
  buzz: {
    color: Color.colorDeeppink_100,
  },
  getStartedWithContainer: {
    top: 387,
    left: 35,
    fontSize: FontSize.size_13xl,
    textTransform: "capitalize",
    textAlign: "left",
    width: 266,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  loginPage: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default LoginPage2;
