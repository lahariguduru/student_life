import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupModal = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.groupModal, styles.groupModalLayout]}>
      <View style={styles.search} />
      <Text style={[styles.search1, styles.textFlexBox]}>Search</Text>
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
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.angelaSmith, styles.tamraKiddTypo]}>
          Angela Smith
        </Text>
        <Text style={[styles.text, styles.textTypo]}>(512) 455 2929</Text>
        <Pressable
          style={styles.bApple}
          onPress={() => navigation.navigate("GroupModal")}
        >
          <View style={styles.apple} />
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
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.angelaSmith, styles.tamraKiddTypo]}>
          Nikki Casey
        </Text>
        <Text style={[styles.text1, styles.text1Position]}>(206) 342-8631</Text>
        <Pressable
          style={styles.bApple}
          onPress={() => navigation.navigate("GroupModal")}
        >
          <View style={[styles.apple1, styles.appleBg]} />
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
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.tamraKidd, styles.tamraKiddTypo]}>Tamra Kidd</Text>
        <Text style={[styles.text, styles.textTypo]}>(717) 550-1675</Text>
        <Pressable
          style={styles.bApple}
          onPress={() => navigation.navigate("GroupModal")}
        >
          <View style={[styles.apple1, styles.appleBg]} />
        </Pressable>
        <Pressable
          style={styles.bApple}
          onPress={() => navigation.navigate("GroupModal")}
        >
          <View style={[styles.apple1, styles.appleBg]} />
        </Pressable>
        <Pressable
          style={styles.bApple}
          onPress={() => navigation.navigate("GroupModal")}
        >
          <View style={[styles.apple1, styles.appleBg]} />
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
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.sergioHansen, styles.text1Position]}>
          Sergio Hansen
        </Text>
        <Text style={[styles.text, styles.textTypo]}>(248) 762-0356</Text>
        <Pressable
          style={styles.bApple}
          onPress={() => navigation.navigate("GroupModal")}
        >
          <View style={[styles.apple1, styles.appleBg]} />
        </Pressable>
        <Pressable
          style={styles.bApple}
          onPress={() => navigation.navigate("GroupModal")}
        >
          <View style={[styles.apple1, styles.appleBg]} />
        </Pressable>
        <Pressable
          style={styles.bApple}
          onPress={() => navigation.navigate("GroupModal")}
        >
          <View style={[styles.apple1, styles.appleBg]} />
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
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.sergioHansen, styles.text1Position]}>{`Jody Gardner
`}</Text>
        <Text style={[styles.text, styles.textTypo]}>(212) 658-3916</Text>
        <Pressable
          style={styles.bApple}
          onPress={() => navigation.navigate("GroupModal")}
        >
          <View style={[styles.apple1, styles.appleBg]} />
        </Pressable>
        <Text style={[styles.invite, styles.inviteTypo]}>Invite</Text>
      </View>
      <View style={[styles.bApple9, styles.appleLayout]}>
        <View style={[styles.apple9, styles.appleLayout]} />
      </View>
      <View style={[styles.dateParent, styles.groupChildPosition]}>
        <View style={[styles.date, styles.dateShadowBox]} />
        <View style={[styles.time, styles.dateShadowBox]} />
        <Text style={[styles.date1, styles.date1Typo]}>Date</Text>
        <Text style={[styles.time1, styles.date1Typo]}>Time</Text>
      </View>
      <Text style={[styles.submit, styles.inviteTypo]}>Submit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupModalLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  textFlexBox: {
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  groupParentLayout: {
    height: 68,
    left: 30,
    width: 333,
    position: "absolute",
  },
  groupChildPosition: {
    left: "50%",
    position: "absolute",
  },
  tamraKiddTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  textTypo: {
    fontSize: FontSize.size_smi,
    top: 25,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
  },
  inviteTypo: {
    color: Color.colorWhite,
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
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
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
    fontFamily: FontFamily.interMedium,
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
  appleBg: {
    backgroundColor: Color.colorDeeppink,
    borderRadius: Border.br_16xl,
    top: 0,
  },
  sTypo: {
    top: "20%",
    fontSize: FontSize.size_6xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  appleLayout: {
    width: 118,
    height: 40,
    left: "50%",
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
  date1Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorGray_100,
    letterSpacing: 1,
    position: "absolute",
  },
  search: {
    top: 27,
    left: 25,
    borderRadius: Border.br_xl,
    width: 341,
    height: 50,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
  },
  search1: {
    top: 40,
    left: 42,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    letterSpacing: 1,
  },
  groupChild: {
    marginLeft: -166.5,
    top: 67,
    height: 1,
    width: 333,
    left: "50%",
  },
  angelaSmith: {
    left: 74,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
    top: 6,
  },
  text: {
    left: 73,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
    fontSize: FontSize.size_smi,
    top: 25,
  },
  apple: {
    borderRadius: Border.br_16xl,
    marginLeft: -37.5,
    height: 40,
    width: 75,
    left: "50%",
    top: 0,
    backgroundColor: Color.colorWhitesmoke,
    position: "absolute",
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
    top: 16,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  userAParent: {
    top: 107,
  },
  auraSunsetIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
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
  },
  text1: {
    width: 105,
    fontSize: FontSize.size_smi,
    top: 25,
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
  },
  apple1: {
    marginLeft: -37.5,
    backgroundColor: Color.colorDeeppink,
    height: 40,
    width: 75,
    left: "50%",
    position: "absolute",
  },
  invite: {
    left: 277,
    top: 16,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  userAGroup: {
    top: 198,
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
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  userAContainer: {
    top: 285,
  },
  s: {
    left: "32%",
  },
  sergioHansen: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    top: 6,
  },
  groupView: {
    top: 372,
  },
  j: {
    left: "34%",
  },
  userAParent1: {
    top: 459,
  },
  apple9: {
    marginLeft: -59,
    backgroundColor: Color.colorDeeppink,
    borderRadius: Border.br_16xl,
    top: 0,
  },
  bApple9: {
    marginLeft: -46.5,
    top: 634,
  },
  date: {
    marginLeft: -158.5,
    top: 1,
    width: 200,
  },
  time: {
    marginLeft: 58.5,
    width: 100,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
  },
  date1: {
    top: 18,
    left: 17,
  },
  time1: {
    top: 17,
    left: 233,
  },
  dateParent: {
    marginLeft: -161.5,
    top: 556,
    width: 317,
    height: 51,
  },
  submit: {
    top: 646,
    left: 185,
  },
  groupModal: {
    borderRadius: Border.br_11xl,
    width: 393,
    height: 700,
    backgroundColor: Color.colorWhite,
  },
});

export default GroupModal;
