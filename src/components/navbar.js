import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { accents, lightTheme } from "../constants/colors";
import Icons from "@expo/vector-icons/Feather";

export default function Navbar({ navigation }) {
  const { width, height } = Dimensions.get("screen");
  const { accentP, accentG, accentY } = accents;
  const insets = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.navbar, { width: width }]}>
        <Icons name="home" size={30} color={accentG} />
        <Icons name="menu" size={30} color={accentP} />
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 50,
            backgroundColor: accentY,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    height: 60,
    backgroundColor: lightTheme.base,
    bottom: 0,
  },
});
