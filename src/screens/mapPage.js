import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { lightTheme, darkTheme, accents } from "../constants/colors";

export default function MapPage({ navigation, route }) {
  const { color } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar translucent hidden={true} />
      <Text style={{ fontSize: 60 }}>MapPage</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={{ fontSize: 30, color: color }}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.base,
    alignItems: "center",
    justifyContent: "center",
  },
});
