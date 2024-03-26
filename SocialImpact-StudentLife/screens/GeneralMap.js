import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import Modal1 from "../components/Modal1";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const GeneralMap = () => {
  const [groupIconVisible, setGroupIconVisible] = useState(false);
  const navigation = useNavigation();

  const openGroupIcon = useCallback(() => {
    setGroupIconVisible(true);
  }, []);

  const closeGroupIcon = useCallback(() => {
    setGroupIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.generalMap}>
        <Image
          style={styles.basemapImageIcon}
          contentFit="cover"
          source={require("../assets/basemap-image.png")}
        />
        <View style={styles.statusBar}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
          <View style={[styles.battery, styles.timePosition]}>
            <View style={[styles.border, styles.timePosition]} />
            <Image
              style={[styles.capIcon, styles.timePosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.timePosition]} />
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
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={openGroupIcon}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-4.png")}
          />
        </Pressable>
        <Image
          style={[styles.generalMapChild, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/group-5.png")}
        />
        <View style={styles.navigation}>
          <Pressable
            style={[styles.navigation1, styles.iconLayout]}
            onPress={() => navigation.navigate("GeneralMap")}
          />
          <Pressable
            style={[styles.home, styles.homePosition]}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.location, styles.homePosition]}
            onPress={() => navigation.navigate("GeneralMap")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/location1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.user, styles.homePosition]}
            onPress={() => navigation.navigate("Modal1")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/user.png")}
            />
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={groupIconVisible}>
        <View style={styles.groupIconOverlay}>
          <Pressable style={styles.groupIconBg} onPress={closeGroupIcon} />
          <Modal1 onClose={closeGroupIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  wrapperLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  homePosition: {
    top: 14,
    height: 50,
    width: 50,
    position: "absolute",
  },
  basemapImageIcon: {
    top: -214,
    left: -513,
    width: 1280,
    height: 1280,
    position: "absolute",
  },
  time: {
    marginTop: -7.5,
    left: 21,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "center",
    width: 54,
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
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
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
    top: 0,
    left: 0,
    height: 47,
    right: 0,
    position: "absolute",
  },
  groupIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  wrapper: {
    left: 61,
    top: 227,
  },
  generalMapChild: {
    top: 433,
    left: 237,
  },
  navigation1: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_16xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    height: "100%",
  },
  home: {
    left: 29,
  },
  location: {
    left: 152,
  },
  user: {
    left: 275,
  },
  navigation: {
    top: 729,
    left: 23,
    width: 350,
    height: 75,
    position: "absolute",
  },
  generalMap: {
    flex: 1,
    height: 852,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GeneralMap;
