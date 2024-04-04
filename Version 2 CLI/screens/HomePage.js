import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.borderPosition]}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.borderPosition]} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
      </View>
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.borderPosition]}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.borderPosition]} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
      </View>
      <Image
        style={styles.userPercentageIcon}
        resizeMode="cover"
        source={require("../assets/user-percentage.png")}
      />
      <View style={styles.navigation}>
        <Pressable
          style={[styles.navigation1, styles.navigation1ShadowBox]}
          onPress={() => navigation.navigate("GeneralMap")}
        />
        <Image
          style={[styles.homeIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/home.png")}
        />
        <Pressable
          style={[styles.location, styles.iconLayout]}
          onPress={() => navigation.navigate("GeneralMap")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/location.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.user, styles.iconLayout]}
          onPress={() => navigation.navigate("UserModal")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
        </Pressable>
      </View>
      <Text style={styles.hiSarah}>Hi Sarah</Text>
      <Pressable
        style={[styles.ellipseParent, styles.childLayout]}
        onPress={() => navigation.navigate("FrameImage")}
      >
        <Image
          style={[styles.frameChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>60</Text>
        <Text style={styles.bpm}>bpm</Text>
      </Pressable>
      <Text style={[styles.text1, styles.textTypo]}>45%</Text>
      <Image
        style={styles.heartIcon}
        resizeMode="cover"
        source={require("../assets/heart.png")}
      />
      <Image
        style={[styles.upArrowIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/up-arrow.png")}
      />
      <Image
        style={[styles.homePageChild, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/frame-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  navigation1ShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iconLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  childLayout: {
    height: 210,
    position: "absolute",
  },
  textTypo: {
    width: 95,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    height: 47,
    position: "absolute",
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
  userPercentageIcon: {
    top: 232,
    left: 125,
    width: 150,
    height: 150,
    position: "absolute",
  },
  navigation1: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_16xl,
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  homeIcon: {
    left: 29,
    top: 14,
    width: 50,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  location: {
    left: 152,
    top: 14,
    width: 50,
  },
  user: {
    left: 275,
    top: 14,
    width: 50,
  },
  navigation: {
    top: 729,
    left: 23,
    width: 350,
    height: 75,
    position: "absolute",
  },
  hiSarah: {
    top: 100,
    left: 135,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  frameChild: {
    left: 0,
    width: 210,
    height: 210,
    top: 0,
  },
  text: {
    top: 91,
    left: 57,
    fontSize: 50,
  },
  bpm: {
    top: 140,
    left: 73,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  ellipseParent: {
    left: 95,
    width: 210,
    height: 210,
    top: 451,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text1: {
    top: 284,
    fontSize: 40,
    left: 152,
  },
  heartIcon: {
    top: 484,
    left: 177,
    width: 40,
    height: 40,
    position: "absolute",
  },
  upArrowIcon: {
    top: 474,
    left: 667,
  },
  homePageChild: {
    left: 336,
    width: 460,
    top: 451,
  },
  homePage: {
    flex: 1,
    height: 852,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default HomePage;
