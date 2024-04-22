import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import ArrowComponent from "../components/ArrowComponent";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import AppleHealthKit, { Constants } from 'react-native-health';

//CODE FOR IT TO WORK?? 
// const WalkingAsymmetry = () => {
//   const navigation = useNavigation();

const WalkingAsymmetry = () => {

  const navigation = useNavigation();
  const options = {
    permissions: {
      read: [
        AppleHealthKit.Constants.Permissions.WalkingAsymmetryPercentage,
      ],
      write: [
      ],
    },
  };
  
    const readWalkingAsymmetry = () => {
      let options = {
        startDate: (new Date(Date.now() - (3 * 24 * 60 * 60 * 1000))).toISOString(), // Example: 3 days ago
        endDate: (new Date()).toISOString(), // Today
      };
  
      AppleHealthKit.getWalkingAsymmetryPercentage(options, (err, results) => {
        if (err) {
          console.log("error reading walking asymmetry: ", err);
          return;
        }
        // ADDED NEW
        if (results && results.length > 0) {
          // Process the results
          const latestAsymmetry = results[results.length - 1].value; // Assuming the latest value is last
          const averageAsymmetry = results.reduce((acc, curr) => acc + curr.value, 0) / results.length;
          
          let previousValue = results.length > 1 ? results[results.length - 2].value : null;
          let change = previousValue ? latestAsymmetry - previousValue : null;
  
          setAsymmetryInfo({
            latest: latestAsymmetry,
            average: averageAsymmetry,
            change: change,
          });
        }
      });
    };
  
  return (
    <LinearGradient
      style={styles.walkingAsymmetry}
      locations={[0, 0.5, 1]}
      colors={[
        "rgba(255, 212, 146, 0.09)",
        "rgba(255, 247, 172, 0.16)",
        "rgba(206, 247, 255, 0.2)",
      ]}
    >
      <Image
        style={styles.walkingAsymmetryChild}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Text style={[styles.text, styles.textLayout]}>3%</Text>
      <Text style={[styles.text1, styles.textTypo1]}>6%</Text>
      <Text style={[styles.text2, styles.textTypo1]}>9%</Text>
      <Text style={[styles.text3, styles.textTypo]}>12%</Text>
      <Image
        style={[styles.walkingAsymmetryItem, styles.walkingLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.walkingAsymmetryInner, styles.walkingLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.walkingLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.walkingAsymmetryChild1, styles.walkingChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-7.png")}
      />
      <Image
        style={[styles.walkingAsymmetryChild2, styles.walkingChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-6.png")}
      />
      <Image
        style={[styles.walkingAsymmetryChild3, styles.walkingLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <GroupComponent1
        onGroupPressablePress={() => navigation.navigate("HeartRate")}
      />
      <View style={[styles.contactParent, styles.contactLayout]}>
        <View style={[styles.contact, styles.contactLayout]} />
        <Text style={[styles.walkingAsymmetry1, styles.textTypo1]}>
          WALKING ASYMMETRY
        </Text>
        <Text style={[styles.text4, styles.text4Clr]}>5%</Text>
        <Image
          style={styles.walkingIcon}
          contentFit="cover"
          source={require("../assets/walking1.png")}
        />
      </View>
      <GroupComponent
        prop="13 ft"
        propLeft={32}
        propWidth={73}
        onGroupPressablePress={() => navigation.navigate("YAxis")}
      />
      <Image
        style={styles.walkingAsymmetryChild4}
        contentFit="cover"
        source={require("../assets/vector-9.png")}
      />
      <Text style={[styles.walkingAsymmetry2, styles.text4Clr]}>
        Walking Asymmetry
      </Text>
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
  textLayout: {
    height: 16,
    color: Color.colorDarkgray,
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  textTypo: {
    width: 50,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  walkingLayout: {
    width: 370,
    maxHeight: "100%",
    position: "absolute",
  },
  walkingChildLayout: {
    height: 0,
    width: 393,
    display: "none",
    position: "absolute",
  },
  contactLayout: {
    height: 99,
    width: 329,
    position: "absolute",
  },
  text4Clr: {
    color: Color.colorBlack,
    letterSpacing: 0,
    position: "absolute",
  },
  walkingAsymmetryChild: {
    top: 396,
    left: 67,
    width: 59,
    height: 59,
    display: "none",
    position: "absolute",
  },
  text: {
    top: 367,
    left: 2,
    width: 41,
    height: 16,
    color: Color.colorDarkgray,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  text1: {
    top: 305,
    left: 13,
    height: 16,
    color: Color.colorDarkgray,
    width: 41,
  },
  text2: {
    top: 242,
    left: 13,
    height: 16,
    color: Color.colorDarkgray,
    width: 41,
  },
  text3: {
    top: 186,
    left: 13,
    height: 16,
    color: Color.colorDarkgray,
    width: 50,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  walkingAsymmetryItem: {
    top: 319,
    left: "50%",
    marginLeft: -183.5,
    maxHeight: "100%",
  },
  walkingAsymmetryInner: {
    top: 200,
    left: "50%",
    marginLeft: -183.5,
    maxHeight: "100%",
  },
  vectorIcon: {
    top: 380,
    left: 13,
  },
  walkingAsymmetryChild1: {
    top: 530,
    left: -2,
  },
  walkingAsymmetryChild2: {
    top: 458,
    left: 1,
  },
  walkingAsymmetryChild3: {
    top: 256,
    left: 13,
  },
  contact: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  walkingAsymmetry1: {
    top: 57,
    left: 79,
    color: Color.colorGray_200,
    width: 184,
    height: 13,
  },
  text4: {
    top: 24,
    left: 77,
    fontSize: FontSize.size_11xl,
    height: 40,
    width: 50,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  walkingIcon: {
    top: 30,
    left: 27,
    width: 35,
    height: 32,
    position: "absolute",
  },
  contactParent: {
    top: 567,
    left: 33,
  },
  walkingAsymmetryChild4: {
    top: 338,
    left: 40,
    width: 338,
    height: 49,
    position: "absolute",
  },
  walkingAsymmetry2: {
    marginLeft: -158.5,
    top: 128,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interRegular,
    width: 318,
    height: 47,
    left: "50%",
    textAlign: "center",
  },
  walkingAsymmetry: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: 852,
  },
});

export default WalkingAsymmetry;
