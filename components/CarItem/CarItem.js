import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Button from "../StyledButton/Button";
import styles from "./style";

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          content={"custom order"}
          onPress={() => {
            console.warn("Custom order was pressed");
          }}
        />
        <Button
          type="secondary"
          content={"existing inventory"}
          onPress={() => {
            console.warn("existing pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
