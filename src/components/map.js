import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { lightTheme, darkTheme, accents } from "../constants/colors";
import * as Location from "expo-location";
import Icon from "@expo/vector-icons/MaterialIcons";

export default function Map() {
  const { width, height } = Dimensions.get("screen");

  const [allowed, setAllowed] = useState(true);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setAllowed(false);
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    setAllowed(true);
  };

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <>
      <View>
        <View style={[styles.mapContainer, { height: height / 2 - 90 }]}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 5,
            }}
          >
            <Text style={[allowed ? { fontSize: 20 } : styles.notAllowed]}>
              {allowed ? "Your location" : "Permission not granted"}
            </Text>
            <Pressable onPress={() => userLocation()}>
              <Icon name="refresh" size={30} color={accents.accentY} />
            </Pressable>
          </View>
          <View
            style={{
              borderRadius: 20,
              height: "100%",
              width: "100%",
              overflow: "hidden",
              marginTop: 10,
            }}
          >
            <MapView
              region={mapRegion}
              style={{ height: "100%", width: "100%" }}
            >
              <Marker coordinate={mapRegion} />
            </MapView>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    display: "flex",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    // backgroundColor: accents.accentG,
  },
  notAllowed: {
    fontSize: 20,
    color: "crimson",
  },
});
