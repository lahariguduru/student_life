import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, Modal } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import UserModal2 from "../components/UserModal2";
import UserModal1 from "../components/UserModal1";
import { useNavigation } from "@react-navigation/native";
import UserModal3 from "../components/UserModal3";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const GeneralMap = () => {
  const [userAOnMapVisible, setUserAOnMapVisible] = useState(false);
  const [userAOnMap1Visible, setUserAOnMap1Visible] = useState(false);
  const [userTOnMapVisible, setUserTOnMapVisible] = useState(false);
  const navigation = useNavigation();
  const [sarahContainerVisible, setSarahContainerVisible] = useState(false);

  const openUserAOnMap = useCallback(() => {
    setUserAOnMapVisible(true);
  }, []);

  const closeUserAOnMap = useCallback(() => {
    setUserAOnMapVisible(false);
  }, []);

  const openUserAOnMap1 = useCallback(() => {
    setUserAOnMap1Visible(true);
  }, []);

  const closeUserAOnMap1 = useCallback(() => {
    setUserAOnMap1Visible(false);
  }, []);

  const openUserTOnMap = useCallback(() => {
    setUserTOnMapVisible(true);
  }, []);

  const closeUserTOnMap = useCallback(() => {
    setUserTOnMapVisible(false);
  }, []);

  const openSarahContainer = useCallback(() => {
    setSarahContainerVisible(true);
  }, []);

  const closeSarahContainer = useCallback(() => {
    setSarahContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.generalMap}>
        <StatusBar1
          wifi={require("../assets/wifi.png")}
          batteryRight={0}
          batteryLeft={0}
        />
        <Image
          style={styles.basemapImageIcon}
          contentFit="cover"
          source={require("../assets/basemap-image1.png")}
        />
        <Pressable
          style={[styles.userAOnMap, styles.userAOnMapPosition]}
          onPress={openUserAOnMap}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/user-a-on-map.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.userAOnMap1, styles.krithiIconPosition]}
          onPress={openUserAOnMap1}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/user-a-on-map1.png")}
          />
        </Pressable>
        <Pressable style={styles.userTOnMap} onPress={openUserTOnMap}>
          <Image
            style={[styles.userTOnMapChild, styles.userPosition2]}
            contentFit="cover"
            source={require("../assets/group-5.png")}
          />
          <View style={[styles.userT, styles.userIconLayout]}>
            <View style={[styles.auraTequila, styles.auraTequilaPosition]}>
              <Image
                style={[styles.clipPathGroup, styles.auraTequilaPosition]}
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
            style={[styles.homeIcon, styles.userPosition1]}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <Pressable
            style={[styles.location, styles.userPosition1]}
            onPress={() => navigation.navigate("GeneralMap")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.user, styles.userPosition1]}
            onPress={() => navigation.navigate("UserModal2")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/user.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.userModalWrapper, styles.userLayout1]}>
          <View style={[styles.userModal, styles.userLayout1]}>
            <View style={[styles.findFriends, styles.groupChildLayout]}>
              <View style={[styles.userAParent, styles.userLayout]}>
                <Image
                  style={[styles.userAIcon, styles.userPosition]}
                  contentFit="cover"
                  source={require("../assets/user-a1.png")}
                />
                <Image
                  style={[styles.userAIcon, styles.userPosition]}
                  contentFit="cover"
                  source={require("../assets/user-a1.png")}
                />
                <View style={[styles.userA, styles.userPosition]}>
                  <Image
                    style={[styles.clipPathGroup, styles.auraTequilaPosition]}
                    contentFit="cover"
                    source={require("../assets/aura-sunset.png")}
                  />
                  <View style={[styles.aWhite, styles.whitePosition]}>
                    <Text style={[styles.k, styles.kTypo]}>K</Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild, styles.groupChildLayout]}
                  contentFit="cover"
                  source={require("../assets/line-3.png")}
                />
                <Text
                  style={[styles.krithiReddy, styles.krithiReddyTypo]}
                >{`Krithi Reddy
`}</Text>
                <Text style={[styles.cava, styles.skyloftTypo]}>Cava</Text>
              </View>
              <Text style={[styles.text, styles.textTypo1]}>20%</Text>
              <Text style={[styles.text1, styles.textTypo]}>35%</Text>
              <Text style={[styles.text2, styles.textTypo1]}>25%</Text>
              <Text style={[styles.text3, styles.textTypo]}>50%</Text>
              <View style={[styles.userAGroup, styles.userLayout]}>
                <Image
                  style={[styles.userAIcon, styles.userPosition]}
                  contentFit="cover"
                  source={require("../assets/user-a1.png")}
                />
                <View style={[styles.userA, styles.userPosition]}>
                  <View
                    style={[styles.auraTequila, styles.auraTequilaPosition]}
                  >
                    <Image
                      style={[styles.clipPathGroup, styles.auraTequilaPosition]}
                      contentFit="cover"
                      source={require("../assets/aura-sunset.png")}
                    />
                    <View style={[styles.aWhite1, styles.whitePosition]}>
                      <Text style={[styles.m, styles.kTypo]}>M</Text>
                    </View>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild, styles.groupChildLayout]}
                  contentFit="cover"
                  source={require("../assets/line-1.png")}
                />
                <Image
                  style={[styles.groupChild, styles.groupChildLayout]}
                  contentFit="cover"
                  source={require("../assets/line-1.png")}
                />
                <Image
                  style={[styles.groupChild, styles.groupChildLayout]}
                  contentFit="cover"
                  source={require("../assets/line-3.png")}
                />
                <Text style={[styles.faithWilson, styles.thPosition]}>
                  Faith Wilson
                </Text>
                <Text style={[styles.skyloft, styles.thPosition]}>Skyloft</Text>
              </View>
              <View style={[styles.userAContainer, styles.userLayout]}>
                <Image
                  style={[styles.userAIcon, styles.userPosition]}
                  contentFit="cover"
                  source={require("../assets/user-a1.png")}
                />
                <Image
                  style={[styles.userAIcon, styles.userPosition]}
                  contentFit="cover"
                  source={require("../assets/user-a1.png")}
                />
                <View style={[styles.userA, styles.userPosition]}>
                  <View
                    style={[styles.auraTequila, styles.auraTequilaPosition]}
                  >
                    <Image
                      style={[styles.clipPathGroup, styles.auraTequilaPosition]}
                      contentFit="cover"
                      source={require("../assets/aura-sunset.png")}
                    />
                    <Text style={[styles.l, styles.lTypo]}>L</Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild, styles.groupChildLayout]}
                  contentFit="cover"
                  source={require("../assets/line-1.png")}
                />
                <Image
                  style={[styles.groupChild, styles.groupChildLayout]}
                  contentFit="cover"
                  source={require("../assets/line-1.png")}
                />
                <Image
                  style={[styles.groupChild, styles.groupChildLayout]}
                  contentFit="cover"
                  source={require("../assets/line-3.png")}
                />
                <Text style={[styles.graysonSmith, styles.thPosition]}>
                  Grayson Smith
                </Text>
                <Text style={[styles.th, styles.thPosition]}>26th West</Text>
              </View>
              <View style={[styles.groupView, styles.userPosition]}>
                <View style={[styles.userT, styles.userIconLayout]}>
                  <View
                    style={[styles.auraTequila, styles.auraTequilaPosition]}
                  >
                    <Image
                      style={[styles.clipPathGroup, styles.auraTequilaPosition]}
                      contentFit="cover"
                      source={require("../assets/aura-sunset.png")}
                    />
                    <Text style={[styles.h1, styles.lTypo]}>H</Text>
                  </View>
                </View>
                <Text style={[styles.hollyRodriguez, styles.cavaPosition]}>
                  Holly Rodriguez
                </Text>
                <Text style={[styles.skyloft1, styles.skyloftTypo]}>
                  Skyloft
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.graysonIcon}
          contentFit="cover"
          source={require("../assets/grayson.png")}
        />
        <Pressable style={styles.sarah} onPress={openSarahContainer}>
          <Image
            style={[styles.userTOnMapChild, styles.userPosition2]}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Image
            style={[styles.userAIcon5, styles.userIconLayout]}
            contentFit="cover"
            source={require("../assets/user-a2.png")}
          />
          <Image
            style={[styles.userTOnMapChild, styles.userPosition2]}
            contentFit="cover"
            source={require("../assets/ellipse-21.png")}
          />
          <Text style={[styles.f, styles.hTypo]}>S</Text>
        </Pressable>
        <Image
          style={[styles.krithiIcon, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/krithi.png")}
        />
        <Image
          style={[styles.fWhiteAuraSquences, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/f-white--aura-squences1.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={userAOnMapVisible}>
        <View style={styles.userAOnMapOverlay}>
          <Pressable style={styles.userAOnMapBg} onPress={closeUserAOnMap} />
          <UserModal2 onClose={closeUserAOnMap} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={userAOnMap1Visible}>
        <View style={styles.userAOnMap1Overlay}>
          <Pressable style={styles.userAOnMap1Bg} onPress={closeUserAOnMap1} />
          <UserModal1 onClose={closeUserAOnMap1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={userTOnMapVisible}>
        <View style={styles.userTOnMapOverlay}>
          <Pressable style={styles.userTOnMapBg} onPress={closeUserTOnMap} />
          <UserModal2 onClose={closeUserTOnMap} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={sarahContainerVisible}>
        <View style={styles.sarahContainerOverlay}>
          <Pressable
            style={styles.sarahContainerBg}
            onPress={closeSarahContainer}
          />
          <UserModal3 onClose={closeSarahContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  userAOnMapPosition: {
    top: 200,
    left: 61,
    height: 50,
    position: "absolute",
  },
  krithiIconPosition: {
    left: 279,
    position: "absolute",
  },
  userPosition2: {
    left: 0,
    top: 0,
    height: 50,
    position: "absolute",
  },
  userIconLayout: {
    borderRadius: Border.br_981xl,
    overflow: "hidden",
    width: 50,
  },
  auraTequilaPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  hTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  userPosition1: {
    top: 14,
    height: 50,
    width: 50,
    position: "absolute",
  },
  userLayout1: {
    height: 375,
    width: 393,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    width: 333,
    position: "absolute",
  },
  userLayout: {
    height: 68,
    width: 333,
    left: 0,
    position: "absolute",
  },
  userPosition: {
    left: 3,
    height: 50,
    position: "absolute",
  },
  whitePosition: {
    left: "24%",
    right: "26%",
    width: "50%",
    overflow: "hidden",
    height: "100%",
    position: "absolute",
  },
  kTypo: {
    fontSize: FontSize.size_6xl,
    top: 16,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 1,
    position: "absolute",
  },
  krithiReddyTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
  },
  skyloftTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
  },
  textTypo1: {
    letterSpacing: 0,
    width: "8.5%",
    height: "3.41%",
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    position: "absolute",
  },
  textTypo: {
    left: "87.99%",
    letterSpacing: 0,
    width: "8.5%",
    height: "3.41%",
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    position: "absolute",
  },
  thPosition: {
    left: 78,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  lTypo: {
    top: "20%",
    fontSize: FontSize.size_6xl,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    letterSpacing: 1,
    position: "absolute",
  },
  cavaPosition: {
    left: 75,
    letterSpacing: 1,
    position: "absolute",
  },
  basemapImageIcon: {
    top: -295,
    left: -329,
    width: 1280,
    height: 1280,
    position: "absolute",
  },
  userAOnMapOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  userAOnMapBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  userAOnMap: {
    height: 50,
    width: 50,
  },
  userAOnMap1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  userAOnMap1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  userAOnMap1: {
    width: 55,
    height: 60,
    top: 25,
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
    width: 50,
  },
  clipPathGroup: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  h: {
    top: "14%",
    left: "26%",
    textAlign: "center",
  },
  auraTequila: {
    overflow: "hidden",
  },
  userT: {
    overflow: "hidden",
    left: 0,
    top: 0,
    height: 50,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  userTOnMap: {
    top: 358,
    left: 259,
    height: 50,
    width: 50,
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
  userAIcon: {
    overflow: "hidden",
    borderRadius: Border.br_981xl,
    width: 50,
    top: 0,
  },
  k: {
    left: 5,
  },
  aWhite: {
    top: "-12%",
    bottom: "12%",
  },
  userA: {
    overflow: "hidden",
    borderRadius: Border.br_981xl,
    width: 50,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  groupChild: {
    marginLeft: -166.5,
    top: 67,
    left: "50%",
    height: 1,
  },
  krithiReddy: {
    left: 74,
    textAlign: "left",
    top: 5,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    letterSpacing: 1,
    position: "absolute",
  },
  cava: {
    left: 75,
    letterSpacing: 1,
    position: "absolute",
    textAlign: "left",
    top: 25,
  },
  userAParent: {
    top: 0,
  },
  text: {
    top: "7.07%",
    left: "87.69%",
  },
  text1: {
    top: "34.73%",
  },
  text2: {
    top: "62.38%",
    left: "88.29%",
  },
  text3: {
    top: "90.68%",
  },
  m: {
    left: 2,
  },
  aWhite1: {
    top: "-10%",
    bottom: "10%",
  },
  faithWilson: {
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    top: 5,
  },
  skyloft: {
    top: 27,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
  },
  userAGroup: {
    top: 87,
  },
  l: {
    left: "34%",
  },
  graysonSmith: {
    top: 6,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
  },
  th: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    top: 25,
  },
  userAContainer: {
    top: 174,
  },
  h1: {
    left: "30%",
  },
  hollyRodriguez: {
    top: 3,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  skyloft1: {
    top: 26,
    left: 75,
    letterSpacing: 1,
    position: "absolute",
    textAlign: "center",
  },
  groupView: {
    top: 261,
    width: 195,
  },
  findFriends: {
    top: 32,
    left: 30,
    height: 311,
  },
  userModal: {
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    overflow: "hidden",
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  userModalWrapper: {
    top: 477,
  },
  graysonIcon: {
    top: 138,
    left: 292,
    height: 50,
    width: 50,
    position: "absolute",
  },
  sarahContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  sarahContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  userAIcon5: {
    overflow: "hidden",
    left: 0,
    top: 0,
    height: 50,
    position: "absolute",
  },
  f: {
    top: 7,
    left: 15,
    textAlign: "center",
  },
  sarah: {
    top: 295,
    left: 139,
    height: 50,
    width: 50,
    position: "absolute",
  },
  krithiIcon: {
    top: 30,
    overflow: "hidden",
    left: 279,
    position: "absolute",
    height: 50,
  },
  fWhiteAuraSquences: {
    overflow: "hidden",
    height: 50,
    top: 200,
    left: 61,
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
