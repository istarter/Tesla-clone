import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import styles from "./style";
import cars from "./cars";
import CarItem from "../CarItem/CarItem";

// Car List
const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.name}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height}
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
      />
    </View>
  );
};

export default CarsList;

{
  /* <CarItem
  name="Model X"
  tagline="Order Online For"
  taglineCTA="Touchless Delivery"
  image={ModalX}
/>; */
}
