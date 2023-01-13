import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { lightTheme, darkTheme, accents } from "../constants/colors";
import React, { useEffect, useState } from "react";
import { crouselData } from "../constants/crouseldata";
import LottieView from "lottie-react-native";
import { FlatList } from "react-native-gesture-handler";

export default function HomeCrousel({ navigation }) {
  const { width, height } = Dimensions.get("screen");

  function goTo(color) {
    navigation.navigate("MapPage", { color: color });
  }

  const CROUSEL_SPACING = 30;
  return (
    <FlatList
      data={crouselData}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width - CROUSEL_SPACING * 2}
      decelerationRate="fast"
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <>
          <TouchableOpacity
            onPress={() => goTo(item.color)}
            style={{
              marginLeft: CROUSEL_SPACING,
              marginRight:
                index === crouselData.length - 1 ? CROUSEL_SPACING : 0,
            }}
          >
            <View
              style={[
                styles.crousel,
                {
                  backgroundColor: item.color,
                  width: width - 80,
                },
              ]}
            >
              <View style={{ width: "60%" }}>
                <Text
                  style={{
                    fontSize: 50,
                    color: lightTheme.base,
                    fontWeight: "bold",
                  }}
                >
                  Book
                </Text>
                <Text style={{ fontSize: 20, color: lightTheme.base }}>
                  {item.para}
                </Text>
              </View>

              <View style={styles.imagebox}>
                <Image style={styles.image} source={item.carImage} />
              </View>
            </View>
          </TouchableOpacity>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  crousel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    height: 200,
    overflow: "hidden",
    paddingLeft: 20,
    paddingTop: 10,
  },
  imagebox: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    height: "100%",
  },
  image: {
    width: 260,
    height: "100%",
    resizeMode: "cover",
  },
});
