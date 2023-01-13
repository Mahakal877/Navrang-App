import { Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { lightTheme, darkTheme, accents } from "../constants/colors";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

export default function Header() {
  const { accentG, accentP, accentY } = accents;
  const [color, setColor] = useState(accentP);

  function openNumber(){
    let number = "";
    if (Platform.OS === "android"){
      number = "tel:+91 7488506849";
    }else {
      number = "telprompt:+91 7488506849";
    }
    Linking.openURL(number)
  }

  function changeColor() {
    if (color === accentY) {
      setColor(accentP);
    } else if (color === accentP) {
      setColor(accentG);
    } else {
      setColor(accentY);
    }
  }

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.name}>Suraj</Text>
      </View>

      <TouchableOpacity

        onPress={() => {
          openNumber(), changeColor()}}
        style={[styles.call, { backgroundColor: color, width: 50, height: 50 }]}
      >
        <Icon name="phone" size={30} color={lightTheme.base} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 150,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 20,
    // backgroundColor: accents.accentP,
  },
  hello: {
    fontSize: 40,
    color: "#585656",
    paddingBottom: 0,
  },
  name: {
    marginTop: -20,
    fontSize: 60,
    color: lightTheme.primary,
  },
  call: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
