import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import ArrowComponent from "../components/ArrowComponent";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

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
      <ArrowComponent
        arrowComponentPosition="absolute"
        arrowComponentTop={56}
        arrowComponentLeft={30}
        onLocationPress={() => navigation.navigate("GeneralMap")}
        onHomePress={() => navigation.navigate("HomePage")}
        onPlusPress={() => navigation.navigate("PartyMode")}
        onProfilePress={() => navigation.navigate("Profile")}
      />
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
        <View style={[styles.search4, styles.searchShadowBox]} />
        <Text style={[styles.weight, styles.ageTypo]}>Weight</Text>
        <Text style={[styles.text, styles.textTypo]}>21</Text>
        <Text style={[styles.text1, styles.textTypo]}>5’ 5”</Text>
        <Text style={[styles.text2, styles.text2Typo]}>125</Text>
        <Text style={[styles.phonenumber, styles.ageTypo]}>Phone Number</Text>
        <Text style={[styles.text3, styles.text2Typo]}>(512) 123 - 4567</Text>
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
    borderRadius: Border.br_11xl,
    left: "50%",
    marginLeft: -149.5,
    backgroundColor: Color.colorWhite,
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
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorGray_100,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  textTypo: {
    left: 66,
    fontFamily: FontFamily.interMedium,
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
  search4: {
    top: 530,
  },
  weight: {
    top: 405,
    left: 63,
  },
  phonenumber: {
    top: 500,
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
  text3: {
    top: 542,
    left: 68,
  },
  profileSettings: {
    top: 220,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    width: 393,
    height: 632,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    left: 0,
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
    width: "100%",
    height: 852,
  },
});

export default Profile;
