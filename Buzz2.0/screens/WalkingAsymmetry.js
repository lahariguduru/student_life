import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import AppleHealthKit, { Constants } from 'react-native-health';

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
    <View style={styles.walkingAsymmetry}>
      <Image
        style={styles.walkingAsymmetryChild}
        contentFit="cover"
        source={require("../assets/ellipse-111.png")}
      />
      <StatusBar1
        wifi={require("../assets/wifi.png")}
        batteryRight={3}
        batteryLeft={-3}
      />
      <StatusBar1
        wifi={require("../assets/wifi.png")}
        batteryRight={3}
        batteryLeft={-3}
      />
      <Text style={[styles.text, styles.textTypo]}>3%</Text>
      <Text style={[styles.text1, styles.textTypo]}>6%</Text>
      <Text style={[styles.text2, styles.textTypo]}>9%</Text>
      <Text style={styles.text3}>12%</Text>
      <Text style={[styles.walkingAsymmetry1, styles.text4Typo]}>
        Walking Asymmetry
      </Text>
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
      <Pressable
        style={[styles.contactParent, styles.groupParentLayout]}
        onPress={() => navigation.navigate("HeartRate")}
      >
        <View style={styles.contactShadowBox} />
        <Text style={styles.bpm}>BPM</Text>
        <Text style={[styles.text4, styles.textLayout]}>60</Text>
        <Image
          style={styles.heartIcon}
          contentFit="cover"
          source={require("../assets/heart1.png")}
        />
      </Pressable>
      <View style={[styles.contactGroup, styles.groupParentLayout]}>
        <View style={styles.contactShadowBox} />
        <Text style={[styles.walkingAsymmetry2, styles.ftAboveGroundTypo]}>
          WALKING ASYMMETRY
        </Text>
        <Text style={[styles.text5, styles.ftTypo]}>5%</Text>
        <Image
          style={styles.walkingIcon}
          contentFit="cover"
          source={require("../assets/walking1.png")}
        />
      </View>
      <Pressable
        style={[styles.groupParent, styles.groupParentLayout]}
        onPress={() => navigation.navigate("YAxis")}
      >
        <View style={styles.groupWrapper}>
          <View style={styles.groupWrapper}>
            <View style={styles.contactShadowBox} />
            <Text style={[styles.ftAboveGround, styles.ftAboveGroundTypo]}>
              FT ABOVE GROUND
            </Text>
            <Text style={[styles.ft, styles.ftTypo]}>13 ft</Text>
          </View>
        </View>
        <Image
          style={styles.heightIcon}
          contentFit="cover"
          source={require("../assets/height1.png")}
        />
      </Pressable>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <Image
        style={styles.walkingAsymmetryChild4}
        contentFit="cover"
        source={require("../assets/vector-9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    height: 16,
    width: 41,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  text4Typo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
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
  groupParentLayout: {
    height: 99,
    width: 329,
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
  ftTypo: {
    top: 24,
    color: Color.colorBlack,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
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
    textAlign: "center",
  },
  text1: {
    top: 305,
    textAlign: "left",
    left: 13,
  },
  text2: {
    top: 242,
    textAlign: "left",
    left: 13,
  },
  text3: {
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
  walkingAsymmetry1: {
    top: 107,
    left: 18,
    width: 291,
    height: 47,
    textAlign: "center",
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
  text4: {
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
    left: 33,
    width: 329,
  },
  walkingAsymmetry2: {
    left: 79,
  },
  text5: {
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
    left: 33,
    width: 329,
  },
  ftAboveGround: {
    left: 80,
    top: 57,
  },
  ft: {
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
    left: 32,
  },
  backIcon: {
    top: 47,
    left: 12,
    width: 23,
    height: 39,
    position: "absolute",
  },
  walkingAsymmetryChild4: {
    top: 338,
    left: 40,
    width: 338,
    height: 49,
    position: "absolute",
  },
  walkingAsymmetry: {
    flex: 1,
    width: "100%",
    height: 852,
    backgroundColor: Color.colorWhite,
  },
});

export default WalkingAsymmetry;



