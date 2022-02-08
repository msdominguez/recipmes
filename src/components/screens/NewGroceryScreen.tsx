import { Colors } from '@constants/colors';
import RecButton from '@rec/RecButton';
import RecMultiInput from '@rec/RecMultiInput';
import Parse from 'parse/react-native';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const NewGroceryScreen = (props: any) => {
  const [grocery, setGrocery]: [any, any] = useState({} as any);

  const saveGrocery = async () => {
    let Grocery = new Parse.Object("grocery");
    Grocery.save(grocery).then(
      (results) => {
        props.navigation.navigate("Groceries", {
          screen: "GroceriesHome",
          params: { isShowing: true, errorMessage: null },
        });
      },
      (error) => {
        const { message, code } = JSON.parse(JSON.stringify(error));
        props.navigation.navigate("Groceries", {
          screen: "GroceriesHome",
          params: {
            isShowing: true,
            errorMessage: `${code} ${message}`,
          },
        });
        console.log("[NewGroceryScreen] saveGrocery error:", error);
      }
    );
  };

  return (
    <SafeAreaView style={styles.background}>
      <KeyboardAwareScrollView>
        <View style={styles.inputsContainer}>
          <RecMultiInput
            placeholder="grocery"
            title="grocery"
            isIngredients
            isGroceries
            ingredients={(ingredients: any[]) => setGrocery(ingredients[0])}
            hidePlus
          />
        </View>
        <RecButton handleClick={saveGrocery} label="save grocery" />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.neutral7,
    margin: 10,
    marginBottom: 100,
  },
  inputsContainer: {
    marginBottom: 30,
    width: "100%",
  },
  row: {
    flexDirection: "row",
  },
  cookTime: {
    color: Colors.neutral1,
    marginTop: 20,
    marginLeft: 5,
  },
  container: {
    paddingBottom: 20,
  },
});

export default NewGroceryScreen;