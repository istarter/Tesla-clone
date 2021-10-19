import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CarItem from "./components/CarItem/CarItem";
import ModalX from "./assets/images/ModelX.jpeg";
import CarsList from "./components/CarsList/CarsList";

export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />
      {/* werthjk */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
