import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.profile}
      locations={[0, 0.73, 1]}
      colors={[
        "rgba(255, 146, 148, 0.09)",
        "rgba(255, 247, 172, 0.16)",
        "rgba(206, 247, 255, 0.2)",
      ]}
    >
      <View style={styles.arrowComponent}>
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
          style={styles.plus}
          onPress={() => navigation.navigate("GroupModal")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/plus.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.profile1, styles.homePosition]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.profileSettings}
        onPress={() => navigation.navigate("Profile")}
      >
        <View style={[styles.search, styles.searchShadowBox]} />
        <Text style={[styles.firstName, styles.ageTypo]}>First Name</Text>
        <Text style={[styles.sarahLee, styles.text2Typo]}>Sarah Lee</Text>
        <View style={[styles.search1, styles.searchShadowBox]} />
        <Text style={[styles.age, styles.ageTypo]}>Age</Text>
        <View style={[styles.search2, styles.searchShadowBox]} />
        <Text style={[styles.height, styles.ageTypo]}>Height</Text>
        <View style={[styles.search3, styles.searchShadowBox]} />
        <Text style={[styles.weight, styles.ageTypo]}>Weight</Text>
        <Text style={[styles.text, styles.textTypo]}>21</Text>
        <Text style={[styles.text1, styles.textTypo]}>5’ 5”</Text>
        <Text style={[styles.text2, styles.text2Typo]}>125</Text>
      </Pressable>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group2.png")}
      />
      <View style={[styles.editIcon, styles.editIconLayout]}>
        <Image
          style={[styles.editIconChild, styles.editIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-16.png")}
        />
        <Image
          style={styles.editIcon1}
          contentFit="cover"
          source={require("../assets/edit.png")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  homePosition: {
    height: "58.97%",
    bottom: "23.08%",
    top: "17.95%",
    position: "absolute",
  },
  searchShadowBox: {
    height: 40,
    width: 300,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    marginLeft: -149.5,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  ageTypo: {
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  text2Typo: {
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorGray_100,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  textTypo: {
    left: 66,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorGray_100,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  editIconLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  arrowComponentChild: {
    width: "83.75%",
    right: "16.25%",
    left: "0%",
    borderRadius: Border.br_11xl,
    overflow: "hidden",
    maxWidth: "100%",
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
    bottom: "15.38%",
    top: "7.69%",
    height: "76.92%",
    position: "absolute",
  },
  profile1: {
    left: "6.25%",
    right: "79.38%",
    width: "14.38%",
  },
  arrowComponent: {
    top: 56,
    left: 30,
    width: 160,
    height: 39,
    position: "absolute",
  },
  search: {
    top: 153,
  },
  firstName: {
    top: 123,
    left: 64,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
  },
  sarahLee: {
    top: 164,
    left: 65,
  },
  search1: {
    top: 247,
  },
  age: {
    top: 217,
    left: 65,
  },
  search2: {
    top: 341,
  },
  height: {
    top: 311,
    left: 64,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
  },
  search3: {
    top: 435,
  },
  weight: {
    top: 405,
    left: 63,
  },
  text: {
    top: 258,
  },
  text1: {
    top: 352,
  },
  text2: {
    top: 447,
    left: 68,
  },
  profileSettings: {
    top: 220,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    width: 393,
    height: 632,
    backgroundColor: Color.colorWhite,
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
  maskGroupIcon: {
    top: 142,
    left: 117,
    width: 150,
    height: 150,
    position: "absolute",
  },
  editIconChild: {
    top: 0,
    left: 0,
    height: 35,
    width: 35,
  },
  editIcon1: {
    top: 5,
    left: 3,
    width: 30,
    height: 25,
    position: "absolute",
  },
  editIcon: {
    top: 226,
    left: 249,
  },
  profile: {
    backgroundColor: "transparent",
    flex: 1,
    height: 852,
    width: "100%",
  },
});

export default Profile;
