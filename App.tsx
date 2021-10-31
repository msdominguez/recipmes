// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
// import Navigation from './navigation';

// export default function App() {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Navigation colorScheme={colorScheme} />
//         <StatusBar />
//       </SafeAreaProvider>
//     );
//   }
// }

import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Colors } from "./colors";
import RecipesScreen from "./components/screens/RecipesScreen";
import RecipeScreen from "./components/screens/RecipeScreen";
import NewRecipeScreen from "./components/screens/NewRecipeScreen";
import MenuScreen from "./components/screens/MenuScreen";
import IngredientsScreen from "./components/screens/IngredientsScreen";
import GroceriesScreen from "./components/screens/GroceriesScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBookOpen,
  faUtensils,
  faCarrot,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import Parse from "parse/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import useCachedResources from "./hooks/useCachedResources";

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize("recipmes", "recipmesJSKey", "recipmesMasterKey619");
Parse.serverURL = "https://recipmes-server.herokuapp.com/parse";
// Parse.serverURL = "http://localhost:1337/parse";

const Tab = createBottomTabNavigator();
const RecipesStack = createNativeStackNavigator();
const MenuStack = createNativeStackNavigator();
const GroceriesStack = createNativeStackNavigator();
const IngredientsStack = createNativeStackNavigator();
{
  // tabBarBackground: () => (
  //   <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
  //     <Text>Sign in with Facebook</Text>
  //   </LinearGradient>
  // ),
  // tabBarBackground: () => (
  //   <BlurView
  //     tint="light"
  //     intensity={100}
  //     style={StyleSheet.absoluteFill}
  //   />
  // ),
}

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              position: "absolute",
              backgroundColor: Colors.purple1,
            },
            tabBarActiveBackgroundColor: Colors.purple2,
            tabBarInactiveBackgroundColor: Colors.purple1,
            tabBarInactiveTintColor: Colors.white,
            tabBarActiveTintColor: Colors.white,
            tabBarItemStyle: {
              marginLeft: 15,
              marginRight: 15,
              marginTop: 10,
              marginBottom: -15,
              borderRadius: 10,
            },
            tabBarShowLabel: false,
            fontFamily: "Kailasa",
          }}
        >
          <Tab.Screen
            name="Recipes"
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon
                  icon={faBookOpen}
                  color={Colors.white}
                  size={size}
                />
              ),
            }}
          >
            {() => (
              <RecipesStack.Navigator>
                <RecipesStack.Screen
                  name="RecipesHome"
                  component={RecipesScreen}
                  options={{
                    title: "Recipes",
                    header: () => <View />,
                  }}
                />
                <RecipesStack.Screen
                  name="NewRecipe"
                  component={NewRecipeScreen}
                  options={{
                    title: "NewRecipe",
                    headerStyle: {
                      backgroundColor: Colors.white,
                    },
                    headerTintColor: Colors.purple1,
                    headerTitle: () => <View />,
                  }}
                />
                <RecipesStack.Screen
                  name="Recipe"
                  component={RecipeScreen}
                  options={{
                    title: "Recipe",
                    headerStyle: {
                      backgroundColor: Colors.white,
                    },
                    headerTintColor: Colors.purple1,
                    headerTitle: () => <View />,
                  }}
                />
              </RecipesStack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen
            name="Menu"
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon
                  icon={faUtensils}
                  color={Colors.white}
                  size={size}
                />
              ),
            }}
            component={MenuScreen}
          />
          <Tab.Screen
            name="Ingredients"
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon
                  icon={faCarrot}
                  color={Colors.white}
                  size={size}
                />
              ),
            }}
            component={MenuScreen}
          />
          <Tab.Screen
            name="Groceries"
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon
                  icon={faList}
                  color={Colors.white}
                  size={size}
                />
              ),
            }}
            component={MenuScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}