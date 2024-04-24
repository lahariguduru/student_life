import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import React, { useEffect, useState } from 'react';
import { LineChart } from 'react-native-chart-kit';


const HeartRate = () => {
  const navigation = useNavigation();
  const [heartRateData, setHeartRateData] = useState({ timestamps: [], bpm: [] });

  useEffect(() => {
    const fetchHeartRateData = async () => {
      try {
        const response = await axios.get('http://10.26.104.196:5000/api/heart_rate');
        setHeartRateData({
          timestamps: response.data.timestamp,
          bpm: response.data.bpm
        });
      } catch (error) {
        console.error('Failed to fetch heart rate data:', error);
      }
    };

    fetchHeartRateData();
  }, []);
  return (
    <LinearGradient
      style={styles.heartRate}
      locations={[0, 0.5, 1]}
      colors={[
        "rgba(255, 212, 146, 0.09)",
        "rgba(255, 247, 172, 0.16)",
        "rgba(206, 247, 255, 0.2)",
      ]}
    >
  
      <Text style={styles.bpm}>40 bpm</Text>
      <Text style={[styles.bpm1, styles.bpmTypo]}>60 bpm</Text>
      <Text style={[styles.bpm2, styles.bpmTypo]}>80 bpm</Text>
      <Text style={styles.bpm3}>100 bpm</Text>
      <Text style={styles.heartRate1}>Heart Rate</Text>
      {heartRateData.bpm.length > 0 && (
        <LineChart
          data={{
            labels: heartRateData.timestamps,
            datasets: [{ data: heartRateData.bpm }]
          }}
          width={300}  // Width of the chart
          height={220}  // Height of the chart
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,  // Optional, this is the color of the line (pink)
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,  // Labels color
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      )}
      <View style={[styles.contactParent, styles.groupParentLayout]}>
        <View style={styles.contactShadowBox} />
        <Text style={styles.bpm4}>BPM</Text>
        <Text style={styles.text}>60</Text>
        <Image
          style={[styles.heartIcon, styles.heartIconPosition]}
          contentFit="cover"
          source={require("../assets/heart1.png")}
        />
      </View>
      <Pressable
        style={[styles.contactGroup, styles.groupParentLayout]}
        onPress={() => navigation.navigate("WalkingAsymmetry")}
      >
        <View style={styles.contactShadowBox} />
        <Text style={[styles.walkingAsymmetry, styles.ftAboveGroundTypo]}>
          WALKING ASYMMETRY
        </Text>
        <Text style={[styles.text1, styles.textTypo]}>5%</Text>
        <Image
          style={styles.walkingIcon}
          contentFit="cover"
          source={require("../assets/walking1.png")}
        />
      </Pressable>
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
            <Text style={[styles.text2, styles.textTypo]}>13</Text>
          </View>
        </View>
        <Image
          style={styles.heightIcon}
          contentFit="cover"
          source={require("../assets/height1.png")}
        />
      </Pressable>
      <View style={[styles.arrowComponent, styles.heartIconPosition]}>
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
          style={[styles.plus, styles.plusPosition]}
          onPress={() => navigation.navigate("GroupModal")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/plus.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.profile, styles.homePosition]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bpmTypo: {
    textAlign: "left",
    left: 13,
    height: 16,
    width: 41,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  heartLayout: {
    width: 370,
    maxHeight: "100%",
    position: "absolute",
  },
  heartChildLayout: {
    height: 0,
    width: 393,
    display: "none",
    position: "absolute",
  },
  groupParentLayout: {
    height: 99,
    width: 329,
    left: 33,
    position: "absolute",
  },
  heartIconPosition: {
    left: 30,
    position: "absolute",
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
  textTypo: {
    top: 24,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    width: 50,
    textAlign: "left",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  homePosition: {
    height: "58.97%",
    bottom: "23.08%",
    top: "17.95%",
    position: "absolute",
  },
  plusPosition: {
    bottom: "15.38%",
    top: "7.69%",
    height: "76.92%",
    position: "absolute",
  },
  heartRateChild: {
    top: 396,
    left: 67,
    width: 59,
    height: 59,
    display: "none",
    position: "absolute",
  },
  bpm: {
    top: 367,
    left: 10,
    height: 16,
    width: 41,
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  bpm1: {
    top: 305,
  },
  bpm2: {
    top: 242,
  },
  bpm3: {
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
  heartRate1: {
    marginLeft: -82.5,
    top: 128,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interRegular,
    width: 168,
    height: 47,
    color: Color.colorBlack,
    left: "50%",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  heartRateItem: {
    top: 319,
    marginLeft: -183.5,
    maxHeight: "100%",
    left: "50%",
  },
  heartRateInner: {
    top: 200,
    marginLeft: -183.5,
    maxHeight: "100%",
    left: "50%",
  },
  vectorIcon: {
    top: 380,
    maxHeight: "100%",
    left: 13,
  },
  heartRateChild1: {
    top: 530,
    left: -2,
  },
  heartRateChild2: {
    top: 458,
    left: 1,
  },
  heartRateChild3: {
    top: 256,
    maxHeight: "100%",
    left: 13,
  },
  heartRateChild4: {
    top: 190,
    left: 54,
    width: 309,
    height: 206,
    position: "absolute",
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
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    height: 99,
    width: 329,
    position: "absolute",
  },
  bpm4: {
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
  text: {
    top: 26,
    height: 40,
    fontSize: FontSize.size_11xl,
    left: 78,
    color: Color.colorBlack,
    width: 50,
    textAlign: "left",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  heartIcon: {
    top: 35,
    width: 27,
    height: 27,
  },
  contactParent: {
    top: 452,
  },
  walkingAsymmetry: {
    left: 79,
  },
  text1: {
    left: 77,
    height: 40,
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
  },
  ftAboveGround: {
    left: 80,
    top: 57,
  },
  text2: {
    left: 78,
    top: 24,
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
  },
  arrowComponentChild: {
    width: "83.75%",
    right: "16.25%",
    left: "0%",
    borderRadius: Border.br_11xl,
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
  },
  profile: {
    left: "6.25%",
    right: "79.38%",
    width: "14.38%",
  },
  arrowComponent: {
    top: 56,
    width: 160,
    height: 39,
  },
  heartRate: {
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    height: 852,
    width: "100%",
  },
});

export default HeartRate;
