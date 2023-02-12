import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./pages/Home";
import OneRepMax from "./pages/OneRepMax";
import MainLifts from "./pages/MainLifts";
import PRs from "./pages/PRs";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="OneRepMax"
        component={OneRepMax}
        options={{ title: "One Rep Max Calculator" }}
      />
      <Stack.Screen
        name="MainLifts"
        component={MainLifts}
        options={{ title: "Main Lifts"}}
      />
      <Stack.Screen
        name="PersonalRecords"
        component={PRs}
        options={{ title: "Personal Records"}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
