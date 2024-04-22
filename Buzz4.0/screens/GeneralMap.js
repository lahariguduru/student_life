import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserModal from "../components/UserModal";
import UserModal2 from "../components/UserModal2";
import ArrowComponent from "../components/ArrowComponent";
import UserModal3 from "../components/UserModal3";
import UserModal1 from "../components/UserModal1";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

// insertions from meli
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const GeneralMap = () => {
  const [userTOnMapVisible, setUserTOnMapVisible] = useState(false);
  const navigation = useNavigation();
  const [userKOnMapVisible, setUserKOnMapVisible] = useState(false);
  const [krithiIconVisible, setKrithiIconVisible] = useState(false);
  const [maskGroupIconVisible, setMaskGroupIconVisible] = useState(false);
  const [maskGroupIcon1Visible, setMaskGroupIcon1Visible] = useState(false);
  const [maskGroupIcon2Visible, setMaskGroupIcon2Visible] = useState(false);

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

  const openMaskGroupIcon2 = useCallback(() => {
    setMaskGroupIcon2Visible(true);
  }, []);

  const closeMaskGroupIcon2 = useCallback(() => {
    setMaskGroupIcon2Visible(false);
  }, []);

  return (
    <>
      <View style={styles.generalMap}>
        
        {/* Meli's Map */}
        <View style={styles.container}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 30.28448,
              longitude: -97.74222,
              latitudeDelta: 0.020,
              longitudeDelta: 0.010,
            }}>

            {/* Sarah Pressable Marker */}
            <Marker
              coordinate={{
                latitude: 30.28463,
                longitude: -97.74184,
              }}
              onPress={() => navigation.navigate("HeartRate")}>

              <Image source={require('../assets/border_45.png')}
                contentFit="cover"
                style={{width: 69, height: 69, justifyContent: "center", alignItems: "center"}}
              >
                <Image source={require('../assets/marker_S.png')}
                contentFit="cover"
                style={{width: 50, height: 50}}
              />
              </Image>
            </Marker>


            {/* Faith Pressable Marker */}
            <Marker
              coordinate={{
                latitude: 30.28657,
                longitude: -97.74364,
              }}
              onPress={openMaskGroupIcon2}>
              <Image source={require('../assets/border_35.png')}
                contentFit="cover"
                style={{width: 69, height: 69, justifyContent: "center", alignItems: "center"}}
              >
                <Image source={require('../assets/marker_F.png')}
                contentFit="cover"
                style={{width: 50, height: 50}}
              />
              </Image>
            </Marker>


            {/* Holly Pressable Marker */}
            <Marker
              coordinate={{
                latitude: 30.28619,
                longitude: -97.74327,
              }}
              onPress={openUserTOnMap}>
              <Image source={require('../assets/border_45.png')}
                contentFit="cover"
                style={{width: 69, height: 69, justifyContent: "center", alignItems: "center"}}
              >
                <Image source={require('../assets/marker_H.png')}
                contentFit="cover"
                style={{width: 50, height: 50}}
              />
              </Image>
            </Marker>


            {/* Grayson Pressable Marker */}
            <Marker
              coordinate={{
                latitude: 30.29087,
                longitude: -97.74368,
              }}
              onPress={openMaskGroupIcon}>
              <Image source={require('../assets/border_gray.png')}
                contentFit="cover"
                style={{width: 69, height: 69, justifyContent: "center", alignItems: "center"}}
              >
                <Image source={require('../assets/marker_G.png')}
                contentFit="cover"
                style={{width: 50, height: 50}}
              />
              </Image>
            </Marker>


            {/* Krithi Pressable Marker */}
            <Marker
              coordinate={{
                latitude: 30.2886,
                longitude: -97.74167,
              }}
              onPress={openUserKOnMap}>
              <Image source={require('../assets/border_20.png')}
                contentFit="cover"
                style={{width: 69, height: 69, justifyContent: "center", alignItems: "center"}}
              >
                <Image source={require('../assets/marker_K.png')}
                contentFit="cover"
                style={{width: 50, height: 50}}
              />
              </Image>
            </Marker>


          </MapView>
        </View>


        {/* NAVIGATION BAR */}
        <ArrowComponent
          arrowComponentPosition="absolute"
          arrowComponentTop={56}
          arrowComponentLeft={30}
          onLocationPress={() => navigation.navigate("GeneralMap")}
          onHomePress={() => navigation.navigate("HomePage")}
          onPlusPress={() => navigation.navigate("PartyMode")}
          onProfilePress={() => navigation.navigate("Profile")}
        />

        {/* White bottom pop up */}
        <Image
          style={[styles.generalMapChild, styles.userChildPosition]}
          contentFit="cover"
          source={require("../assets/map_popup.png")}
        />
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
          <UserModal3 onClose={closeMaskGroupIcon1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={maskGroupIcon2Visible}>
        <View style={styles.maskGroupIcon2Overlay}>
          <Pressable
            style={styles.maskGroupIcon2Bg}
            onPress={closeMaskGroupIcon2}
          />
          <UserModal1 onClose={closeMaskGroupIcon2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({

  // insertions from meli
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  map: {
    width: '100%',
    height: '100%',
  },

  marker: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white'
  },


  userLayout: {
    height: 50,
    width: 50,
  },
  userChildPosition: {
    left: 0,
    position: "absolute",
  },
  userTLayout: {
    overflow: "hidden",
    borderRadius: Border.br_981xl,
  },
  auraTequilaPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  krithiPosition: {
    left: 279,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
    top: 0,
    left: 0,
    height: 50,
    width: 50,
  },
  clipPathGroup: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  h: {
    top: "14%",
    left: "26%",
    fontSize: FontSize.size_11xl,
    letterSpacing: 1,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  userT: {
    left: 0,
    position: "absolute",
    top: 0,
    height: 50,
    width: 50,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    borderRadius: Border.br_981xl,
  },
  userTOnMap: {
    top: 358,
    left: 259,
    position: "absolute",
  },
  graysonIcon: {
    top: 138,
    left: 292,
    position: "absolute",
  },
  sarah: {
    left: 139,
    top: 295,
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
  icon2: {
    overflow: "hidden",
    borderRadius: Border.br_981xl,
  },
  krithi: {
    top: 30,
    height: 50,
    width: 50,
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
  maskGroupIcon2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  maskGroupIcon2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  generalMapChild: {
    top: 477,
    width: 393,
    height: 375,
  },
  generalMap: {
    flex: 1,
    height: 852,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GeneralMap;


