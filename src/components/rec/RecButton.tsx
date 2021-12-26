import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Colors } from "@constants/colors";

import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

const RecButton = (props: any) => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });
  // useEffect(() => {}, [fontsLoaded]);

  return (
    <View
      style={
        props.type === "secondary"
          ? secondaryStyles.container
          : primaryStyles.container
      }
    >
      <TouchableOpacity
        style={
          props.type === "secondary"
            ? secondaryStyles.button
            : primaryStyles.button
        }
        onPress={() => props.handleClick()}
      >
        <Text
          style={[
            primaryStyles.text,
            fontsLoaded ? { fontFamily: "Inter_400Regular" } : {},
            props.type === "secondary" ? secondaryStyles.text : {},
          ]}
        >
          {props.label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const primaryStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral7,
    display: "flex",
    width: "95%",
    margin: 10,
  },
  button: {
    backgroundColor: Colors.yellow5,
    padding: 20,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.yellow3,
    shadowColor: Colors.yellow1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    textShadowRadius: 5,
  },
  text: {
    color: Colors.yellow1,
    fontSize: 22,
  },
});

const secondaryStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral7,
    display: "flex",
  },
  button: {
    backgroundColor: Colors.neutral6,
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: Colors.neutral1,
    fontSize: 15,
    fontFamily: "Kailasa",
  },
});

export default RecButton;
