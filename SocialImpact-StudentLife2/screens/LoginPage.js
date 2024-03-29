import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.loginPage}
      locations={[0, 1, 1]}
      colors={["#fff", "#fff", "#c47093"]}
      useAngle={true}
      angle={180}
    >
      <View style={styles.statusBar}>
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        <View style={[styles.battery, styles.timePosition]}>
          <View style={[styles.border, styles.timePosition]} />
          <Image
            style={[styles.capIcon, styles.timePosition]}
            resizeMode="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={[styles.capacity, styles.timePosition]} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
      </View>
      <Pressable
        style={[styles.bApple, styles.appleLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <View style={[styles.apple, styles.appleLayout]} />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.continueWithPhone, styles.withTypo]}>
          CONTINUE WITH PHONE
        </Text>
      </Pressable>
      <Text style={[styles.getStartedWithContainer, styles.withTypo]}>
        <Text style={styles.getStartedWith}>{`Get Started with `}</Text>
        <Text style={styles.buzz}>BUZZ</Text>
      </Text>
      <Image
        style={[styles.buzzlogoRemovebgPreview1, styles.appleLayout]}
        resizeMode="cover"
        source={require("../assets/buzzlogoremovebgpreview-1-1.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  appleLayout: {
    height: 56,
    position: "absolute",
  },
  withTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  time: {
    marginTop: -7.5,
    left: 21,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 54,
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
  apple: {
    marginLeft: -160,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorWhite,
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
    height: 56,
    top: 0,
  },
  vectorIcon: {
    height: "49.82%",
    width: "7.34%",
    top: "25%",
    right: "86.41%",
    bottom: "25.18%",
    left: "6.25%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  continueWithPhone: {
    top: 20,
    left: 79,
    fontSize: FontSize.size_smi,
    letterSpacing: 1,
    textAlign: "center",
    color: Color.colorBlack,
  },
  bApple: {
    marginLeft: -160.5,
    top: 715,
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
    height: 56,
  },
  getStartedWith: {
    color: Color.colorBlack,
  },
  buzz: {
    color: Color.colorDeeppink,
  },
  getStartedWithContainer: {
    top: 387,
    left: 35,
    fontSize: FontSize.size_13xl,
    textTransform: "capitalize",
    textAlign: "left",
    width: 266,
    letterSpacing: 0,
  },
  buzzlogoRemovebgPreview1: {
    top: 418,
    left: 117,
    width: 51,
  },
  loginPage: {
    flex: 1,
    width: "100%",
    height: 852,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default LoginPage;
