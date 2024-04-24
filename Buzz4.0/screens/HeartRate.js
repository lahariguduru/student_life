
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import FivePercentContainer from "../components/FivePercentContainer";
import GroupComponent from "../components/GroupComponent";
import ArrowComponent from "../components/ArrowComponent";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import React, { useEffect, useState } from 'react';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';


const HeartRate = () => {
  const navigation = useNavigation();
  const [heartRateData, setHeartRateData] = useState({ timestamps: [], bpm: [] });

  useEffect(() => {
    const fetchHeartRateData = async () => {
      try {
        const response = await axios.get('http://10.26.104.196:5000/heart_rate');
        console.log('Received heart rate data:', response.data);
        if (Array.isArray(response.data.bpm)) {
          setHeartRateData({
            timestamps: response.data.timestamp,
            bpm: response.data.bpm
          });
        } else {
          console.error('Received data.bpm is not an array:', response.data.bpm);
        }
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
      <Image
        style={styles.heartRateChild}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Text style={[styles.bpm, styles.bpmLayout]}>40 bpm</Text>
      <Text style={[styles.bpm1, styles.bpmTypo]}>60 bpm</Text>
      <Text style={[styles.bpm2, styles.bpmTypo]}>80 bpm</Text>
      <Text style={[styles.bpm3, styles.bpm3Typo]}>100 bpm</Text>
      <Text style={[styles.heartRate1, styles.textClr]}>Heart Rate</Text>

      
      {heartRateData.bpm.length > 0 && (
        <LineChart
          data={{
            labels: heartRateData.timestamps,
            datasets: [{ data: heartRateData.bpm }]
          }}
          width={400}  // Width of the chart
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
      <View style={[styles.contactParent, styles.contactLayout]}>
        <View style={[styles.contact, styles.contactLayout]} />
        <Text style={[styles.bpm4, styles.bpmTypo]}>BPM</Text>
        <Text style={[styles.text, styles.textClr]}>60</Text>
        <Image
          style={styles.heartIcon}
          contentFit="cover"
          source={require("../assets/heart1.png")}
        />
      </View>
      <FivePercentContainer
        onGroupPressablePress={() => navigation.navigate("WalkingAsymmetry")}
      />
      <GroupComponent
        prop="13"
        onGroupPressablePress={() => navigation.navigate("YAxis")}
      />
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
  bpmLayout: {
    height: 16,
    color: Color.colorDarkgray,
  },
  bpmTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  bpm3Typo: {
    width: 50,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  textClr: {
    color: Color.colorBlack,
    letterSpacing: 0,
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
  contactLayout: {
    height: 99,
    width: 329,
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
  bpm1: {
    top: 305,
    left: 13,
    height: 16,
    color: Color.colorDarkgray,
    width: 41,
  },
  bpm2: {
    top: 242,
    left: 13,
    height: 16,
    color: Color.colorDarkgray,
    width: 41,
  },
  bpm3: {
    top: 186,
    left: 13,
    height: 16,
    color: Color.colorDarkgray,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    width: 50,
    position: "absolute",
  },
  heartRate1: {
    marginLeft: -82.5,
    top: 128,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interRegular,
    width: 168,
    height: 47,
    left: "50%",
    color: Color.colorBlack,
    textAlign: "center",
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
    left: 13,
  },
  heartRateChild4: {
    top: 190,
    left: 54,
    width: 309,
    height: 206,
    position: "absolute",
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
  bpm4: {
    top: 59,
    left: 80,
    color: Color.colorGray_200,
    width: 184,
    height: 13,
  },
  text: {
    top: 26,
    left: 78,
    fontSize: FontSize.size_11xl,
    height: 40,
    width: 50,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
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
  },
  heartRate: {
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    width: "100%", 
    height: 852,
  },
});

export default HeartRate;
