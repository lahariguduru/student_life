import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupModal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupModal}>
      <View style={[styles.search, styles.searchLayout]} />
      <View style={[styles.date, styles.dateShadowBox]} />
      <View style={[styles.time, styles.dateShadowBox]} />
      <Text style={styles.search1}>Search</Text>
      <Text style={styles.newEvents}>NEW EVENTS</Text>
      <View style={styles.groupParent}>
        <View style={[styles.userAParent, styles.groupParentLayout]}>
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={styles.text}>(512) 455 2929</Text>
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
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={styles.text}>(512) 455 2929</Text>
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
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
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
          <Text style={styles.text}>(512) 455 2929</Text>
          <Text style={styles.text}>(512) 455 2929</Text>
          <Text style={styles.text}>(512) 455 2929</Text>
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
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
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
          <Text style={styles.text}>(512) 455 2929</Text>
          <Text style={styles.text}>(512) 455 2929</Text>
          <Text style={styles.text}>(512) 455 2929</Text>
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
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={styles.text}>(512) 455 2929</Text>
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
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.angelaSmith, styles.date1Typo]}>
            Angela Smith
          </Text>
          <Text style={styles.text}>(512) 455 2929</Text>
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
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
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
          <Text style={styles.text}>(512) 455 2929</Text>
          <Text style={styles.text}>(512) 455 2929</Text>
          <Text style={styles.text}>(512) 455 2929</Text>
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
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
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
          <Text style={styles.text}>(512) 455 2929</Text>
          <Text style={styles.text}>(512) 455 2929</Text>
          <Text style={styles.text}>(512) 455 2929</Text>
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
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
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
          <Text style={styles.text}>(512) 455 2929</Text>
          <Text style={styles.text}>(512) 455 2929</Text>
          <Text style={styles.text}>(512) 455 2929</Text>
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
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={[styles.userAIcon, styles.searchLayout]}
            resizeMode="cover"
            source={require("../assets/user-a.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.groupChild}
            resizeMode="cover"
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
          <Text style={styles.text}>(512) 455 2929</Text>
          <Text style={styles.text}>(512) 455 2929</Text>
          <Text style={styles.text}>(512) 455 2929</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 50,
    position: "absolute",
  },
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
  groupParentLayout: {
    height: 68,
    left: 10,
    width: 333,
    position: "absolute",
  },
  date1Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
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
  search: {
    top: 68,
    left: 26,
    borderRadius: 20,
    width: 341,
    backgroundColor: Color.colorWhitesmoke,
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
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 1,
    color: Color.colorGray,
    position: "absolute",
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
    left: 3,
    borderRadius: Border.br_981xl,
    width: 50,
    overflow: "hidden",
    top: 0,
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
    top: 6,
    left: 74,
    color: Color.colorBlack,
  },
  text: {
    top: 25,
    left: 73,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.colorGray,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 1,
    position: "absolute",
  },
  apple: {
    backgroundColor: Color.colorWhitesmoke,
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
  userAContainer: {
    top: 178,
  },
  groupView: {
    top: 265,
  },
  userAParent1: {
    top: 352,
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
    color: Color.colorGray,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  time1: {
    top: 717,
    left: 271,
    color: Color.colorGray,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  groupModal: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 800,
    backgroundColor: Color.colorWhite,
  },
});

export default GroupModal;
