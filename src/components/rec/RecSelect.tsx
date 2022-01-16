import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Colors } from "@constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Unit } from "@models/Unit";

const RecSelect = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    props.selectedValue(value);
  }, [value]);

  const onSelectItem = (key: string): void => {
    setValue(key);
    setIsOpen(false);
  };

  const getSize = (): number => {
    switch (props.size) {
      case "half":
        return 190;
      case "third":
        return 260;
      default:
        return 390;
    }
  };

  return (
    <View
      style={[
        styles.inputContainer,
        { width: props.width ?? getSize() },
        props.marginRight && { marginRight: props.marginRight },
      ]}
    >
      <Text style={props.title ? styles.inputTitle : styles.hidden}>
        {props.title}
      </Text>
      <FontAwesomeIcon
        icon={isOpen ? faChevronUp : faChevronDown}
        style={styles.chevDown}
        color={Colors.neutral1}
      />
      <TextInput
        style={[
          styles.input,
          props.backgroundColor && { backgroundColor: props.backgroundColor },
        ]}
        placeholder={props.placeholder}
        placeholderTextColor={
          props.placeholderTextColor
            ? props.placeholderTextColor
            : Colors.neutral2
        }
        editable={false}
        onPressIn={() => setIsOpen(!isOpen)}
      >
        {value}
      </TextInput>
      <SafeAreaView style={!isOpen && styles.hidden}>
        <ScrollView
          style={[
            styles.list,
            props.backgroundColor && { backgroundColor: props.backgroundColor },
          ]}
        >
          {Object.values(Unit).map((unit, i) => (
            <TouchableOpacity key={i} onPress={() => onSelectItem(unit)}>
              <Text
                style={[
                  styles.listItem,
                  { width: props.width ?? getSize() },
                  props.marginRight && { marginRight: props.marginRight },
                ]}
              >
                {unit}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  hidden: {
    display: "none",
  },
  inputTitle: {
    width: "100%",
    color: Colors.neutral1,
    marginTop: 10,
    marginLeft: 5,
  },
  input: {
    height: 50,
    width: "100%",
    marginTop: 10,
    color: Colors.neutral1,
    backgroundColor: Colors.neutral6,
    borderRadius: 8,
    padding: 10,
  },
  inputContainer: {
    alignItems: "flex-start",
  },
  listItem: {
    color: Colors.neutral1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
  },
  list: {
    maxHeight: 100,
    width: "100%",
    overflow: "hidden",
    marginTop: "-30%",
    backgroundColor: Colors.neutral6,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  absolute: {
    position: "absolute",
  },
  chevDown: {
    position: "absolute",
    marginTop: 55,
    marginLeft: 150,
    zIndex: 1,
  },
});

export default RecSelect;
