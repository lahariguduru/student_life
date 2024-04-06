import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AppleHealthKit from 'react-native-health';

const options = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.WalkingAsymmetryPercentage,
    ],
    write: [
    ],
  },
};

const MyHealthKitPage = () => {
  // ADDED NEW 
  const [asymmetryInfo, setAsymmetryInfo] = useState({
    latest: null,
    average: null,
    change: null,
  });

  useEffect(() => {
    AppleHealthKit.initHealthKit(options, (err) => {
      if (err) {
        console.log("error initializing HealthKit: ", err);
        return;
      }
      console.log("HealthKit initialized for walking asymmetry");
    });
  }, []);

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
    <View style={{padding: 20}}>
      <Text>HealthKit Walking Asymmetry Example</Text>
      <Button title="Read Walking Asymmetry" onPress={readWalkingAsymmetry} />
      {asymmetryInfo.latest !== null && (
        <View>
          <Text>Latest Asymmetry: {asymmetryInfo.latest}%</Text>
          <Text>Average Asymmetry: {asymmetryInfo.average.toFixed(2)}%</Text>
          {asymmetryInfo.change !== null && (
            <Text>Change from Previous: {asymmetryInfo.change.toFixed(2)}%</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default MyHealthKitPage;



// const HomePage = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.homePage}>
//       <View style={styles.statusBar}>
//         <Text style={styles.time}>9:41</Text>
//         <View style={[styles.battery, styles.borderPosition]}>
//           <View style={[styles.border, styles.borderPosition]} />
//           <Image
//             style={[styles.capIcon, styles.borderPosition]}
//             contentFit="cover"
//             source={require("../assets/cap.png")}
//           />
//           <View style={[styles.capacity, styles.borderPosition]} />
//         </View>
//         <Image
//           style={styles.wifiIcon}
//           contentFit="cover"
//           source={require("../assets/wifi.png")}
//         />
//         <Image
//           style={styles.cellularConnectionIcon}
//           contentFit="cover"
//           source={require("../assets/cellular-connection.png")}
//         />
//       </View>
//       <View style={styles.statusBar}>
//         <Text style={styles.time}>9:41</Text>
//         <View style={[styles.battery, styles.borderPosition]}>
//           <View style={[styles.border, styles.borderPosition]} />
//           <Image
//             style={[styles.capIcon, styles.borderPosition]}
//             contentFit="cover"
//             source={require("../assets/cap.png")}
//           />
//           <View style={[styles.capacity, styles.borderPosition]} />
//         </View>
//         <Image
//           style={styles.wifiIcon}
//           contentFit="cover"
//           source={require("../assets/wifi.png")}
//         />
//         <Image
//           style={styles.cellularConnectionIcon}
//           contentFit="cover"
//           source={require("../assets/cellular-connection.png")}
//         />
//       </View>
//       <Image
//         style={styles.userPercentageIcon}
//         contentFit="cover"
//         source={require("../assets/user-percentage.png")}
//       />
//       <View style={styles.navigation}>
//         <Pressable
//           style={[styles.navigation1, styles.navigation1ShadowBox]}
//           onPress={() => navigation.navigate("GeneralMap")}
//         />
//         <Image
//           style={[styles.homeIcon, styles.userLayout]}
//           contentFit="cover"
//           source={require("../assets/home.png")}
//         />
//         <Pressable
//           style={[styles.location, styles.userLayout]}
//           onPress={() => navigation.navigate("GeneralMap")}
//         >
//           <Image
//             style={styles.iconLayout}
//             contentFit="cover"
//             source={require("../assets/location.png")}
//           />
//         </Pressable>
//         <Pressable
//           style={[styles.user, styles.userLayout]}
//           onPress={() => navigation.navigate("Modal1")}
//         >
//           <Image
//             style={styles.iconLayout}
//             contentFit="cover"
//             source={require("../assets/user.png")}
//           />
//         </Pressable>
//       </View>
//       <Text style={styles.hiSarah}>Hi Sarah</Text>
//       <Pressable
//         style={[styles.ellipseParent, styles.frameChildLayout]}
//         onPress={() => navigation.navigate("Frame")}
//       >
//         <Image
//           style={[styles.frameChild, styles.frameChildLayout]}
//           contentFit="cover"
//           source={require("../assets/ellipse-3.png")}
//         />
//         <Text style={[styles.text, styles.textTypo]}>60</Text>
//         <Text style={styles.bpm}>bpm</Text>
//       </Pressable>
//       <Image
//         style={styles.heartIcon}
//         contentFit="cover"
//         source={require("../assets/heart.png")}
//       />
//       <Text style={[styles.text1, styles.textTypo]}>45%</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   borderPosition: {
//     top: "50%",
//     position: "absolute",
//   },
//   navigation1ShadowBox: {
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//   },
//   userLayout: {
//     height: 50,
//     width: 50,
//     top: 14,
//     position: "absolute",
//   },
//   frameChildLayout: {
//     height: 210,
//     width: 210,
//     position: "absolute",
//   },
//   textTypo: {
//     width: 95,
//     fontFamily: FontFamily.interMedium,
//     fontWeight: "500",
//     textAlign: "center",
//     color: Color.colorBlack,
//     letterSpacing: 0,
//     height: 47,
//     position: "absolute",
//   },
//   time: {
//     marginTop: -7.5,
//     left: 21,
//     fontSize: FontSize.size_mini,
//     fontWeight: "700",
//     fontFamily: FontFamily.interBold,
//     width: 54,
//     textAlign: "center",
//     color: Color.colorBlack,
//     letterSpacing: 0,
//     top: "50%",
//     position: "absolute",
//   },
//   border: {
//     marginTop: -5.65,
//     right: 2,
//     borderRadius: 3,
//     borderStyle: "solid",
//     borderColor: Color.colorBlack,
//     borderWidth: 1,
//     width: 22,
//     opacity: 0.35,
//     height: 11,
//   },
//   capIcon: {
//     marginTop: -1.95,
//     right: 0,
//     width: 1,
//     height: 4,
//     opacity: 0.4,
//   },
//   capacity: {
//     marginTop: -3.65,
//     right: 4,
//     borderRadius: 1,
//     backgroundColor: Color.colorBlack,
//     width: 18,
//     height: 7,
//   },
//   battery: {
//     marginTop: -4.2,
//     right: 14,
//     width: 24,
//     height: 11,
//   },
//   wifiIcon: {
//     width: 15,
//     height: 11,
//   },
//   cellularConnectionIcon: {
//     width: 17,
//     height: 11,
//   },
//   statusBar: {
//     right: 3,
//     left: -3,
//     height: 47,
//     top: 0,
//     position: "absolute",
//   },
//   userPercentageIcon: {
//     top: 232,
//     left: 125,
//     width: 150,
//     height: 150,
//     position: "absolute",
//   },
//   navigation1: {
//     top: "0%",
//     right: "0%",
//     bottom: "0%",
//     left: "0%",
//     borderRadius: Border.br_16xl,
//     height: "100%",
//     width: "100%",
//     position: "absolute",
//     backgroundColor: Color.colorWhite,
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//   },
//   homeIcon: {
//     left: 29,
//   },
//   iconLayout: {
//     height: "100%",
//     width: "100%",
//   },
//   location: {
//     left: 152,
//   },
//   user: {
//     left: 275,
//   },
//   navigation: {
//     top: 729,
//     left: 23,
//     width: 350,
//     height: 75,
//     position: "absolute",
//   },
//   hiSarah: {
//     top: 100,
//     left: 135,
//     fontSize: FontSize.size_13xl,
//     fontFamily: FontFamily.interRegular,
//     textAlign: "left",
//     color: Color.colorBlack,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   frameChild: {
//     left: 0,
//     top: 0,
//     width: 210,
//   },
//   text: {
//     top: 91,
//     left: 57,
//     fontSize: 50,
//   },
//   bpm: {
//     top: 140,
//     left: 73,
//     fontSize: FontSize.size_11xl,
//     fontFamily: FontFamily.interMedium,
//     fontWeight: "500",
//     textAlign: "center",
//     color: Color.colorBlack,
//     letterSpacing: 0,
//     position: "absolute",
//   },
//   ellipseParent: {
//     top: 451,
//     left: 95,
//     shadowOpacity: 1,
//     elevation: 4,
//     shadowRadius: 4,
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//   },
//   heartIcon: {
//     top: 456,
//     left: 178,
//     width: 40,
//     height: 100,
//     position: "absolute",
//   },
//   text1: {
//     top: 284,
//     fontSize: 40,
//     left: 152,
//   },
//   homePage: {
//     flex: 1,
//     height: 852,
//     overflow: "hidden",
//     width: "100%",
//     backgroundColor: Color.colorWhite,
//   },
// });

//export default WalkingAsymmetry;
