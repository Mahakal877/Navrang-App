import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { lightTheme } from "../constants/colors";
import Header from "../components/header";
import HomeCrousel from "../components/homeCrousel";
import Map from "../components/map";
import { StatusBar } from "expo-status-bar";
import Navbar from "../components/navbar";

export default function Home({ navigation }) {
  const inset = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.container, { paddingTop: inset.top }]}>
        <StatusBar translucent={true} style="auto" />
        <Header />
        <View style={{ marginVertical: 20, height: 200 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <HomeCrousel navigation={navigation} />
          </ScrollView>
        </View>
        <Map />
        <Navbar />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.base,
  },
});
