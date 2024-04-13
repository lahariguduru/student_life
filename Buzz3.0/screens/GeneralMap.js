import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import UserModal from "../components/UserModal";
import { useNavigation } from "@react-navigation/native";
import UserModal2 from "../components/UserModal2";
import UserModal3 from "../components/UserModal3";
import UserModal1 from "../components/UserModal1";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const GeneralMap = () => {
  const [userTOnMapVisible, setUserTOnMapVisible] = useState(false);
  const [userKOnMapVisible, setUserKOnMapVisible] = useState(false);
  const [krithiIconVisible, setKrithiIconVisible] = useState(false);
  const navigation = useNavigation();
  const [maskGroupIconVisible, setMaskGroupIconVisible] = useState(false);
  const [maskGroupIcon1Visible, setMaskGroupIcon1Visible] = useState(false);

  const openUserTOnMap = useCallback(() => {
    setUserTOnMapVisible(true);
  }, []);

  const closeUserTOnMap = useCallback(() => {
    setUserTOnMapVisible(false);
  }, []);

  const openUserKOnMap = useCallback(() => {
    setUserKOnMapVisible(true);
  }, []);

  const closeUserKOnMap = useCallback(() => {
    setUserKOnMapVisible(false);
  }, []);

  const openKrithiIcon = useCallback(() => {
    setKrithiIconVisible(true);
  }, []);

  const closeKrithiIcon = useCallback(() => {
    setKrithiIconVisible(false);
  }, []);

  const openMaskGroupIcon = useCallback(() => {
    setMaskGroupIconVisible(true);
  }, []);

  const closeMaskGroupIcon = useCallback(() => {
    setMaskGroupIconVisible(false);
  }, []);

  const openMaskGroupIcon1 = useCallback(() => {
    setMaskGroupIcon1Visible(true);
  }, []);

  const closeMaskGroupIcon1 = useCallback(() => {
    setMaskGroupIcon1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.generalMap}>
        <View style={[styles.statusBar, styles.userChildPosition]}>
          <Text style={styles.time}>9:41</Text>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.borderPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.borderPosition]} />
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
        <Image
          style={styles.basemapImageIcon}
          contentFit="cover"
          source={require("../assets/basemap-image.png")}
        />
        <Image
          style={[styles.userAOnMap, styles.userIconLayout1]}
          contentFit="cover"
          source={require("../assets/user-a-on-map.png")}
        />
        <Pressable
          style={[styles.userTOnMap, styles.userIconLayout1]}
          onPress={openUserTOnMap}
        >
          <Image
            style={[styles.userTOnMapChild, styles.userIconLayout1]}
            contentFit="cover"
            source={require("../assets/group-5.png")}
          />
          <View style={[styles.userT, styles.userIconLayout]}>
            <View style={[styles.auraTequila, styles.auraTequilaPosition]}>
              <Image
                style={[styles.clipPathGroup, styles.icon4Layout]}
                contentFit="cover"
                source={require("../assets/clip-path-group.png")}
              />
              <Text style={[styles.h, styles.hTypo]}>H</Text>
            </View>
          </View>
        </Pressable>
        <View style={styles.navigation}>
          <Pressable
            style={[styles.navigation1, styles.auraTequilaPosition]}
            onPress={() => navigation.navigate("GeneralMap")}
          />
          <Image
            style={[styles.homeIcon, styles.userPosition]}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <Pressable
            style={[styles.location, styles.userPosition]}
            onPress={() => navigation.navigate("GeneralMap")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.user, styles.userPosition]}
            onPress={() => navigation.navigate("UserModal")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/user.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.generalMapChild, styles.userChildPosition]}
          contentFit="cover"
          source={require("../assets/group-31.png")}
        />
        <Image
          style={[styles.graysonIcon, styles.userIconLayout1]}
          contentFit="cover"
          source={require("../assets/grayson.png")}
        />
        <Pressable
          style={[styles.sarah, styles.userIconLayout1]}
          onPress={() => navigation.navigate("HeartRate")}
        >
          <Image
            style={[styles.userTOnMapChild, styles.userIconLayout1]}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={[styles.userAIcon, styles.userIconLayout]}
            contentFit="cover"
            source={require("../assets/user-a1.png")}
          />
          <Image
            style={[styles.userTOnMapChild, styles.userIconLayout1]}
            contentFit="cover"
            source={require("../assets/ellipse-21.png")}
          />
          <Text style={[styles.f, styles.hTypo]}>S</Text>
        </Pressable>
        <Pressable
          style={[styles.userKOnMap, styles.krithiPosition]}
          onPress={openUserKOnMap}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/user-k-on-map.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.krithi, styles.krithiPosition]}
          onPress={openKrithiIcon}
        >
          <Image
            style={[styles.icon3, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/krithi.png")}
          />
        </Pressable>
        <View style={styles.arrowComponent}>
          <Image
            style={[styles.arrowComponentChild, styles.plusPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-2.png")}
          />
          <Pressable
            style={styles.location1}
            onPress={() => navigation.navigate("GeneralMap")}
          >
            <Image
              style={[styles.icon4, styles.icon4Layout]}
              contentFit="cover"
              source={require("../assets/location1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.home, styles.homePosition]}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Image
              style={[styles.icon4, styles.icon4Layout]}
              contentFit="cover"
              source={require("../assets/home1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.plus, styles.plusPosition]}
            onPress={() => navigation.navigate("GroupModal")}
          >
            <Image
              style={[styles.icon4, styles.icon4Layout]}
              contentFit="cover"
              source={require("../assets/plus.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.profile, styles.homePosition]}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={[styles.icon4, styles.icon4Layout]}
              contentFit="cover"
              source={require("../assets/profile.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={[styles.graysonIcon, styles.userIconLayout1]}
          onPress={openMaskGroupIcon}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.userAOnMap, styles.userIconLayout1]}
          onPress={openMaskGroupIcon1}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/mask-group1.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={userTOnMapVisible}>
        <View style={styles.userTOnMapOverlay}>
          <Pressable style={styles.userTOnMapBg} onPress={closeUserTOnMap} />
          <UserModal onClose={closeUserTOnMap} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={userKOnMapVisible}>
        <View style={styles.userKOnMapOverlay}>
          <Pressable style={styles.userKOnMapBg} onPress={closeUserKOnMap} />
          <UserModal2 onClose={closeUserKOnMap} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={krithiIconVisible}>
        <View style={styles.krithiIconOverlay}>
          <Pressable style={styles.krithiIconBg} onPress={closeKrithiIcon} />
          <UserModal2 onClose={closeKrithiIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={maskGroupIconVisible}>
        <View style={styles.maskGroupIconOverlay}>
          <Pressable
            style={styles.maskGroupIconBg}
            onPress={closeMaskGroupIcon}
          />
          <UserModal3 onClose={closeMaskGroupIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={maskGroupIcon1Visible}>
        <View style={styles.maskGroupIcon1Overlay}>
          <Pressable
            style={styles.maskGroupIcon1Bg}
            onPress={closeMaskGroupIcon1}
          />
          <UserModal1 onClose={closeMaskGroupIcon1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  userChildPosition: {
    left: 0,
    position: "absolute",
  },
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  userIconLayout1: {
    height: 50,
    width: 50,
  },
  userIconLayout: {
    borderRadius: Border.br_981xl,
    overflow: "hidden",
  },
  auraTequilaPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  icon4Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  hTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 1,
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    position: "absolute",
  },
  userPosition: {
    top: 14,
    height: 50,
    width: 50,
    position: "absolute",
  },
  krithiPosition: {
    left: 279,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  plusPosition: {
    bottom: "15.38%",
    top: "7.69%",
    height: "76.92%",
    position: "absolute",
  },
  homePosition: {
    height: "58.97%",
    bottom: "23.08%",
    top: "17.95%",
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
    width: 54,
    textAlign: "center",
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
    height: 47,
    right: 0,
    top: 0,
    left: 0,
  },
  basemapImageIcon: {
    top: -295,
    left: -329,
    width: 1280,
    height: 1280,
    position: "absolute",
  },
  userAOnMap: {
    top: 200,
    left: 61,
    position: "absolute",
  },
  userTOnMapOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  userTOnMapBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  userTOnMapChild: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  clipPathGroup: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  h: {
    top: "14%",
    left: "26%",
  },
  auraTequila: {
    left: "0%",
    overflow: "hidden",
  },
  userT: {
    overflow: "hidden",
    height: 50,
    width: 50,
    left: 0,
    position: "absolute",
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  userTOnMap: {
    top: 358,
    left: 259,
    position: "absolute",
  },
  navigation1: {
    borderRadius: Border.br_16xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: "0%",
    backgroundColor: Color.colorWhite,
  },
  homeIcon: {
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
    display: "none",
    position: "absolute",
  },
  generalMapChild: {
    top: 489,
    width: 393,
    height: 375,
  },
  graysonIcon: {
    top: 138,
    left: 292,
    position: "absolute",
  },
  userAIcon: {
    overflow: "hidden",
    height: 50,
    width: 50,
    left: 0,
    position: "absolute",
    top: 0,
  },
  f: {
    top: 7,
    left: 15,
  },
  sarah: {
    top: 295,
    left: 139,
    position: "absolute",
  },
  userKOnMapOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  userKOnMapBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  userKOnMap: {
    top: 25,
    width: 55,
    height: 60,
  },
  krithiIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  krithiIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon3: {
    overflow: "hidden",
    borderRadius: Border.br_981xl,
  },
  krithi: {
    top: 30,
    height: 50,
    width: 50,
  },
  arrowComponentChild: {
    width: "83.75%",
    right: "16.25%",
    borderRadius: Border.br_11xl,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
  },
  icon4: {
    height: "100%",
    width: "100%",
  },
  location1: {
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
    left: 30,
    width: 160,
    height: 39,
    position: "absolute",
  },
  maskGroupIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  maskGroupIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  maskGroupIcon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  maskGroupIcon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  generalMap: {
    flex: 1,
    height: 852,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GeneralMap;
