import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupModal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupModal}>
      <View style={styles.search} />
      <View style={[styles.date, styles.dateShadowBox]} />
      <View style={[styles.time, styles.dateShadowBox]} />
      <Text style={[styles.search1, styles.date1FlexBox]}>Search</Text>
      <Text style={styles.newEvents}>NEW EVENTS</Text>
      <View style={styles.groupParent}>
        <View style={[styles.userAParent, styles.groupParentLayout]}>
          <Image
            style={styles.userLayout}
            contentFit="cover"
            source={require("../assets/user-a1.png")}
          />
          <Image
            style={styles.userLayout}
            contentFit="cover"
            source={require("../assets/user-a1.png")}
          />
          <Image
            style={styles.userLayout}
            contentFit="cover"
            source={require("../assets/user-a1.png")}
          />
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(512) 455 2929</Text>
          <Pressable
            style={styles.bApple}
            onPress={() => navigation.navigate("GroupModal")}
          >
            <View style={[styles.apple, styles.applePosition]} />
          </Pressable>
          <Text style={[styles.invited, styles.inviteTypo]}>Invited</Text>
        </View>
        <View style={[styles.userAGroup, styles.groupParentLayout]}>
          <Image
            style={styles.userLayout}
            contentFit="cover"
            source={require("../assets/user-a1.png")}
          />
          <Image
            style={styles.userLayout}
            contentFit="cover"
            source={require("../assets/user-a1.png")}
          />
          <View style={[styles.userA, styles.userLayout]}>
            <Image
              style={[styles.auraSunsetIcon, styles.auraPosition]}
              contentFit="cover"
              source={require("../assets/aura-sunset.png")}
            />
            <View style={[styles.aWhite, styles.whitePosition]}>
              <Text style={[styles.n, styles.nTypo]}>N</Text>
            </View>
          </View>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Nikki Casey
          </Text>
          <Text style={[styles.text1, styles.text1Position]}>
            (206) 342-8631
          </Text>
          <Pressable
            style={styles.bApple}
            onPress={() => navigation.navigate("GroupModal")}
          >
            <View style={[styles.apple1, styles.applePosition]} />
          </Pressable>
          <Text style={[styles.invite, styles.inviteTypo]}>Invite</Text>
        </View>
        <View style={[styles.userAContainer, styles.groupParentLayout]}>
          <Image
            style={styles.userLayout}
            contentFit="cover"
            source={require("../assets/user-a1.png")}
          />
          <View style={[styles.userA, styles.userLayout]}>
            <View style={styles.auraPosition}>
              <Image
                style={[styles.auraSunsetIcon, styles.auraPosition]}
                contentFit="cover"
                source={require("../assets/aura-sunset.png")}
              />
              <View style={[styles.aWhite1, styles.whitePosition]}>
                <Text style={[styles.t, styles.nTypo]}>T</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.tamraKidd, styles.date1Typo]}>Tamra Kidd</Text>
          <Text style={[styles.text, styles.textPosition]}>(717) 550-1675</Text>
          <Pressable
            style={styles.bApple}
            onPress={() => navigation.navigate("GroupModal")}
          >
            <View style={[styles.apple1, styles.applePosition]} />
          </Pressable>
          <Pressable
            style={styles.bApple}
            onPress={() => navigation.navigate("GroupModal")}
          >
            <View style={[styles.apple1, styles.applePosition]} />
          </Pressable>
          <Pressable
            style={styles.bApple}
            onPress={() => navigation.navigate("GroupModal")}
          >
            <View style={[styles.apple1, styles.applePosition]} />
          </Pressable>
          <Text style={[styles.invite, styles.inviteTypo]}>Invite</Text>
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <Image
            style={styles.userLayout}
            contentFit="cover"
            source={require("../assets/user-a1.png")}
          />
          <Image
            style={styles.userLayout}
            contentFit="cover"
            source={require("../assets/user-a1.png")}
          />
          <View style={[styles.userA, styles.userLayout]}>
            <View style={styles.auraPosition}>
              <Image
                style={[styles.auraSunsetIcon, styles.auraPosition]}
                contentFit="cover"
                source={require("../assets/aura-sunset.png")}
              />
              <Text style={[styles.s, styles.sTypo]}>S</Text>
            </View>
          </View>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.sergioHansen, styles.text1Position]}>
            Sergio Hansen
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(248) 762-0356</Text>
          <Pressable
            style={styles.bApple}
            onPress={() => navigation.navigate("GroupModal")}
          >
            <View style={[styles.apple1, styles.applePosition]} />
          </Pressable>
          <Pressable
            style={styles.bApple}
            onPress={() => navigation.navigate("GroupModal")}
          >
            <View style={[styles.apple1, styles.applePosition]} />
          </Pressable>
          <Pressable
            style={styles.bApple}
            onPress={() => navigation.navigate("GroupModal")}
          >
            <View style={[styles.apple1, styles.applePosition]} />
          </Pressable>
          <Text style={[styles.invite, styles.inviteTypo]}>Invite</Text>
        </View>
        <View style={[styles.userAParent1, styles.groupParentLayout]}>
          <View style={[styles.userA, styles.userLayout]}>
            <View style={styles.auraPosition}>
              <Image
                style={[styles.auraSunsetIcon, styles.auraPosition]}
                contentFit="cover"
                source={require("../assets/aura-sunset.png")}
              />
              <Text style={[styles.j, styles.sTypo]}>J</Text>
            </View>
          </View>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Text
            style={[styles.sergioHansen, styles.text1Position]}
          >{`Jody Gardner
`}</Text>
          <Text style={[styles.text, styles.textPosition]}>(212) 658-3916</Text>
          <Pressable
            style={styles.bApple}
            onPress={() => navigation.navigate("GroupModal")}
          >
            <View style={[styles.apple1, styles.applePosition]} />
          </Pressable>
          <Text style={[styles.invite, styles.inviteTypo]}>Invite</Text>
        </View>
        <View style={[styles.userAParent2, styles.groupParentLayout]}>
          <Image
            style={styles.userLayout}
            contentFit="cover"
            source={require("../assets/user-a1.png")}
          />
          <Image
            style={styles.userLayout}
            contentFit="cover"
            source={require("../assets/user-a1.png")}
          />
          <View style={[styles.userA, styles.userLayout]}>
            <View style={styles.auraPosition}>
              <Image
                style={[styles.auraSunsetIcon, styles.auraPosition]}
                contentFit="cover"
                source={require("../assets/aura-sunset.png")}
              />
              <Text style={[styles.s, styles.sTypo]}>R</Text>
            </View>
          </View>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.raphaelJennings, styles.textPosition]}>
            Raphael Jennings
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(234) 109-6666</Text>
          <Pressable
            style={styles.bApple}
            onPress={() => navigation.navigate("GroupModal")}
          >
            <View style={[styles.apple1, styles.applePosition]} />
          </Pressable>
          <Text style={[styles.invite, styles.inviteTypo]}>Invite</Text>
        </View>
        <GroupComponent
          onBApplePress={() => navigation.navigate("GroupModal")}
          onBApplePress1={() => navigation.navigate("GroupModal")}
          onBApplePress2={() => navigation.navigate("GroupModal")}
        />
        <GroupComponent
          propTop={613}
          onBApplePress={() => navigation.navigate("GroupModal")}
          onBApplePress1={() => navigation.navigate("GroupModal")}
          onBApplePress2={() => navigation.navigate("GroupModal")}
        />
        <GroupComponent
          propTop={700}
          onBApplePress={() => navigation.navigate("GroupModal")}
          onBApplePress1={() => navigation.navigate("GroupModal")}
          onBApplePress2={() => navigation.navigate("GroupModal")}
        />
        <GroupComponent
          propTop={787}
          onBApplePress={() => navigation.navigate("GroupModal")}
          onBApplePress1={() => navigation.navigate("GroupModal")}
          onBApplePress2={() => navigation.navigate("GroupModal")}
        />
      </View>
      <Text style={[styles.date1, styles.date1Typo]}>Date</Text>
      <Text style={[styles.time1, styles.date1Typo]}>Time</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    left: "50%",
    height: 50,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  date1FlexBox: {
    textAlign: "center",
    color: Color.colorGray_100,
    letterSpacing: 1,
    position: "absolute",
  },
  groupParentLayout: {
    height: 68,
    left: 10,
    width: 333,
    position: "absolute",
  },
  date1Typo: {
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  textPosition: {
    left: 73,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  applePosition: {
    borderRadius: Border.br_16xl,
    marginLeft: -37.5,
    height: 40,
    width: 75,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  inviteTypo: {
    color: Color.colorWhite,
    top: 16,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  userLayout: {
    overflow: "hidden",
    width: 50,
    borderRadius: Border.br_981xl,
    left: 3,
    top: 0,
    height: 50,
    position: "absolute",
  },
  auraPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
  },
  whitePosition: {
    left: "24%",
    right: "26%",
    width: "50%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  nTypo: {
    fontSize: FontSize.size_6xl,
    color: Color.colorWhite,
    top: 16,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  text1Position: {
    left: 72,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  sTypo: {
    top: "20%",
    fontSize: FontSize.size_6xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  search: {
    top: 68,
    left: 26,
    borderRadius: Border.br_xl,
    width: 341,
    height: 50,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  date: {
    marginLeft: -158.5,
    top: 702,
    width: 200,
  },
  time: {
    marginLeft: 58.5,
    top: 701,
    width: 100,
  },
  search1: {
    top: 81,
    left: 43,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
    letterSpacing: 1,
  },
  newEvents: {
    top: 28,
    left: 152,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -166.5,
    top: 67,
    height: 1,
    width: 333,
    left: "50%",
    position: "absolute",
  },
  angelaSmith: {
    left: 74,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
    top: 6,
  },
  text: {
    top: 25,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
  },
  apple: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_16xl,
    marginLeft: -37.5,
  },
  bApple: {
    marginLeft: 91.5,
    top: 4,
    height: 40,
    width: 75,
    left: "50%",
    position: "absolute",
  },
  invited: {
    left: 273,
  },
  userAParent: {
    top: 0,
    left: 10,
  },
  auraSunsetIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  n: {
    left: 4,
  },
  aWhite: {
    top: "-12%",
    bottom: "12%",
  },
  userA: {
    backgroundColor: Color.colorWhite,
    width: 50,
    borderRadius: Border.br_981xl,
    left: 3,
  },
  text1: {
    width: 105,
    top: 25,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
  },
  apple1: {
    backgroundColor: Color.colorDeeppink_100,
  },
  invite: {
    left: 277,
  },
  userAGroup: {
    top: 91,
  },
  t: {
    left: 5,
  },
  aWhite1: {
    top: "-10%",
    bottom: "10%",
  },
  tamraKidd: {
    top: 5,
    left: 74,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  userAContainer: {
    top: 178,
  },
  s: {
    left: "32%",
  },
  sergioHansen: {
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    top: 6,
    color: Color.colorBlack,
  },
  groupView: {
    top: 265,
  },
  j: {
    left: "34%",
  },
  userAParent1: {
    top: 352,
  },
  raphaelJennings: {
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    top: 6,
    color: Color.colorBlack,
  },
  userAParent2: {
    top: 439,
  },
  groupParent: {
    top: 161,
    left: 21,
    width: 353,
    height: 500,
    position: "absolute",
  },
  date1: {
    top: 718,
    left: 55,
    textAlign: "center",
    color: Color.colorGray_100,
    letterSpacing: 1,
    position: "absolute",
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  time1: {
    top: 717,
    left: 271,
    textAlign: "center",
    color: Color.colorGray_100,
    letterSpacing: 1,
    position: "absolute",
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  groupModal: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GroupModal;
