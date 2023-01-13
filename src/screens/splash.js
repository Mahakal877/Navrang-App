import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { StatusBar } from "expo-status-bar";

export default function Splash({ navigation }) {
  const [authLoded, setAuthLoded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoded(true);
    }, 5000);
  }, []);

  useEffect(() => {
    if (authLoded) {
      navigation.replace("Home");
    }
  }, [authLoded, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <LottieView
        source={require("../animations/navrangLogo.json")}
        autoPlay
        loop={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
