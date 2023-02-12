import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Cycle } from "../models/Cycle";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.HomeScreen}>
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Calculate One Rep Max"
          onPress={() => navigation.navigate("OneRepMax")}
        />
        <Button
          title="Main Lifts"
          onPress={() => navigation.navigate("MainLifts")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
