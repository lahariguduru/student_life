import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GroupModal from "../components/GroupModal";
import ArrowComponent from "../components/ArrowComponent";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PartyMode = () => {
  const navigation = useNavigation();
  const [bAppleContainerVisible, setBAppleContainerVisible] = useState(false);

  const openBAppleContainer = useCallback(() => {
    setBAppleContainerVisible(true);
  }, []);

  const closeBAppleContainer = useCallback(() => {
    setBAppleContainerVisible(false);
  }, []);

  return (
    <>
      <LinearGradient
        style={styles.partyMode}
        locations={[0, 0.5, 1]}
        colors={[
          "rgba(255, 212, 146, 0.09)",
          "rgba(255, 247, 172, 0.16)",
          "rgba(206, 247, 255, 0.2)",
        ]}
      >
        <Image
          style={[styles.partyModeChild, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("GeneralMap")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/ellipse-9.png")}
          />
        </Pressable>
        <Text style={[styles.may1, styles.pmTypo]}>May 1</Text>
        <View style={styles.partyModeItem} />
        <Text style={[styles.pm, styles.pmTypo]}>10PM</Text>
        <Text style={[styles.today, styles.pmTypo]}>TODAY</Text>
        <Text style={[styles.pm1, styles.pmTypo]}>9PM</Text>
        <Text style={[styles.pjParty, styles.pjPartyTypo]}>PJ Party</Text>
        <Text style={[styles.netEvent, styles.pjPartyTypo]}>Net Event</Text>
        <Pressable
          style={[styles.bApple, styles.appleShadowBox]}
          onPress={openBAppleContainer}
        >
          <View style={[styles.apple, styles.appleShadowBox]} />
          <Text style={styles.text}>+</Text>
        </Pressable>
        <Image
          style={styles.pjPartyUsers}
          contentFit="cover"
          source={require("../assets/pj-party-users.png")}
        />
        <Image
          style={styles.exampleUsersIcon}
          contentFit="cover"
          source={require("../assets/example-users.png")}
        />
        <Image
          style={styles.basemapImageIcon}
          contentFit="cover"
          source={require("../assets/basemap-image1.png")}
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

      <Modal animationType="fade" transparent visible={bAppleContainerVisible}>
        <View style={styles.bAppleContainerOverlay}>
          <Pressable
            style={styles.bAppleContainerBg}
            onPress={closeBAppleContainer}
          />
          <GroupModal onClose={closeBAppleContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 150,
    width: 150,
    top: 193,
    position: "absolute",
  },
  pmTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  pjPartyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    top: 357,
    color: Color.colorBlack,
    position: "absolute",
  },
  appleShadowBox: {
    height: 55,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    width: 100,
    position: "absolute",
  },
  partyModeChild: {
    left: 36,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 206,
  },
  may1: {
    top: 384,
    left: 93,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
  },
  partyModeItem: {
    top: 342,
    left: 66,
    height: 100,
    width: 100,
    position: "absolute",
    overflow: "hidden",
  },
  pm: {
    top: 402,
    left: 93,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
  },
  today: {
    top: 386,
    left: 258,
  },
  pm1: {
    top: 405,
    left: 266,
  },
  pjParty: {
    left: 73,
  },
  netEvent: {
    left: 240,
  },
  bAppleContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  bAppleContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  apple: {
    marginLeft: -50,
    top: 0,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.colorWhite,
  },
  text: {
    marginTop: -11.5,
    marginLeft: -1,
    top: "50%",
    width: 3,
    height: 16,
    left: "50%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 1,
    position: "absolute",
  },
  bApple: {
    marginLeft: -49.5,
    top: 746,
  },
  pjPartyUsers: {
    top: 239,
    left: 69,
    width: 80,
    height: 67,
    position: "absolute",
  },
  exampleUsersIcon: {
    top: 234,
    left: 225,
    width: 111,
    height: 75,
    position: "absolute",
  },
  basemapImageIcon: {
    top: 1684,
    left: -1421,
    width: 1118,
    height: 938,
    position: "absolute",
  },
  partyMode: {
    backgroundColor: "transparent",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default PartyMode;
