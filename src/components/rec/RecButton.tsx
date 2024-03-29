import { Colors } from '@constants/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RecButton = (props: any) => {
  const getStyles = () => {
    switch (props.type) {
      case "primary":
        return primaryStyles;
      case "secondary":
        return secondaryStyles;
      case "tertiary":
        return tertiaryStyles;
      default:
        return primaryStyles;
    }
  };

  return (
    <View style={getStyles().container}>
      <TouchableOpacity style={getStyles().button} onPress={props.handleClick}>
        {props.icon && (
          <FontAwesomeIcon icon={props.icon} color={Colors.neutral1} />
        )}
        <Text style={[getStyles().text, props.icon && { paddingLeft: 10 }]}>
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
    alignSelf: "center",
    width: "95%",
    margin: 10,
  },
  button: {
    display: "flex",
    alignItems: "center",
    backgroundColor: Colors.pink4,
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.pink3,
  },
  text: {
    color: Colors.black,
    fontSize: 22,
    fontFamily: "Regular",
  },
});

const secondaryStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderColor: Colors.neutral6,
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    padding: 15,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: Colors.neutral4,
    shadowOpacity: 0.5,
    shadowRadius: 0.25,
    shadowOffset: {
      width: -0.5,
      height: 0.5,
    },
  },
  text: {
    color: Colors.neutral2,
    fontSize: 16,
    fontFamily: "Regular",
  },
});

const tertiaryStyles = StyleSheet.create({
  container: {
    display: "flex",
  },
  button: {
    alignItems: "center",
    backgroundColor: Colors.neutral7,
    borderRadius: 5,
    padding: 15,
  },
  text: {
    color: Colors.neutral2,
    fontSize: 16,
    fontFamily: "Regular",
  },
});

export default RecButton;
