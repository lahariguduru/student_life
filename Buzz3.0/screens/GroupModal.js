import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
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
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a2.png")}
          />
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a2.png")}
          />
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a2.png")}
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
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a2.png")}
          />
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a2.png")}
          />
          <View style={[styles.userA, styles.userLayout]}>
            <Image
              style={[styles.auraSunsetIcon, styles.iconLayout]}
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
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a2.png")}
          />
          <View style={[styles.userA, styles.userLayout]}>
            <View style={[styles.auraSunset, styles.auraPosition]}>
              <Image
                style={[styles.auraSunsetIcon, styles.iconLayout]}
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
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a2.png")}
          />
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a2.png")}
          />
          <View style={[styles.userA, styles.userLayout]}>
            <View style={[styles.auraSunset, styles.auraPosition]}>
              <Image
                style={[styles.auraSunsetIcon, styles.iconLayout]}
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
            <View style={[styles.auraSunset, styles.auraPosition]}>
              <Image
                style={[styles.auraSunsetIcon, styles.iconLayout]}
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
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a3.png")}
          />
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a3.png")}
          />
          <View style={[styles.userA, styles.userLayout]}>
            <View style={[styles.auraSunset, styles.auraPosition]}>
              <Image
                style={[styles.auraSunsetIcon, styles.iconLayout]}
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
        <View style={[styles.userAParent3, styles.groupParentLayout]}>
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a3.png")}
          />
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a3.png")}
          />
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a3.png")}
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
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(512) 455 2929</Text>
          <Text style={[styles.text, styles.textPosition]}>(512) 455 2929</Text>
          <Text style={[styles.text, styles.textPosition]}>(512) 455 2929</Text>
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
          <Text style={[styles.invite5, styles.inviteTypo]}>Invite</Text>
          <Text style={[styles.invite5, styles.inviteTypo]}>Invite</Text>
          <Text style={[styles.invite5, styles.inviteTypo]}>Invite</Text>
        </View>
        <View style={[styles.userAParent4, styles.groupParentLayout]}>
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a3.png")}
          />
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a3.png")}
          />
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a3.png")}
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
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(512) 455 2929</Text>
          <Text style={[styles.text, styles.textPosition]}>(512) 455 2929</Text>
          <Text style={[styles.text, styles.textPosition]}>(512) 455 2929</Text>
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
          <Text style={[styles.invite5, styles.inviteTypo]}>Invite</Text>
          <Text style={[styles.invite5, styles.inviteTypo]}>Invite</Text>
          <Text style={[styles.invite5, styles.inviteTypo]}>Invite</Text>
        </View>
        
        <View style={[styles.userAParent5, styles.groupParentLayout]}>
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a3.png")}
          />
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a3.png")}
          />
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a3.png")}
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
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(512) 455 2929</Text>
          <Text style={[styles.text, styles.textPosition]}>(512) 455 2929</Text>
          <Text style={[styles.text, styles.textPosition]}>(512) 455 2929</Text>
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
          <Text style={[styles.invite5, styles.inviteTypo]}>Invite</Text>
          <Text style={[styles.invite5, styles.inviteTypo]}>Invite</Text>
          <Text style={[styles.invite5, styles.inviteTypo]}>Invite</Text>
        </View>
        <View style={[styles.userAParent6, styles.groupParentLayout]}>
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a3.png")}
          />
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a3.png")}
          />
          <Image
            style={[styles.userAIcon, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-a3.png")}
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
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={[styles.text, styles.textPosition]}>(512) 455 2929</Text>
          <Text style={[styles.text, styles.textPosition]}>(512) 455 2929</Text>
          <Text style={[styles.text, styles.textPosition]}>(512) 455 2929</Text>
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
          <Text style={[styles.invite5, styles.inviteTypo]}>Invite</Text>
          <Text style={[styles.invite5, styles.inviteTypo]}>Invite</Text>
          <Text style={[styles.invite5, styles.inviteTypo]}>Invite</Text>
        </View>
      </View>
      <Text style={[styles.date1, styles.date1Typo]}>Date</Text>
      <Text style={[styles.time1, styles.date1Typo]}>Time</Text>
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
  userLayout: {
    width: 50,
    borderRadius: Border.br_981xl,
    left: 3,
    overflow: "hidden",
    top: 0,
    height: 50,
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  auraPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
  userAIcon: {
    overflow: "hidden",
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
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  n: {
    left: 4,
  },
  aWhite: {
    top: "-12%",
    bottom: "12%",
  },
  userA: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
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
    backgroundColor: Color.colorDeeppink,
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
  auraSunset: {
    left: "0%",
    overflow: "hidden",
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
  invite5: {
    left: 267,
  },
  userAParent3: {
    top: 526,
  },
  userAParent4: {
    top: 613,
  },
  userAParent5: {
    top: 700,
  },
  userAParent6: {
    top: 787,
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
  arrowComponentChild: {
    width: "83.75%",
    right: "16.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    borderRadius: Border.br_11xl,
    top: "7.69%",
    height: "76.92%",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
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
    top: 21,
    left: 11,
    width: 160,
    height: 39,
    position: "absolute",
  },
  groupModal: {
    flex: 1,
    height: 800,
    width: "100%",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
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
  icon4: {
    height: "100%",
    width: "100%",
  },
});

export default GroupModal;
