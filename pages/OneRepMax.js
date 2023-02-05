import React, { useState } from "react";
import {
  Keyboard,
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button } from "react-native-paper";

function OneRepMax({ navigation }) {
  const [weight, setWeight] = React.useState();
  const [reps, setReps] = React.useState();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView>
        <View>
          <TextInput
            keyboardType="numeric"
            style={{ marginBottom: 10 }}
            label="Reps"
            value={reps}
            onChangeText={(text) => setReps(text)}
          />
        </View>
        <View>
          <TextInput
            keyboardType="numeric"
            label="Weight"
            value={weight}
            onChangeText={(text) => setWeight(text)}
          />
        </View>
        <View>
          <Text style={styles.ORMTitle}>One Rep Max</Text>
          <Text style={styles.ORMDisplay}>{DisplayORM(reps, weight)}</Text>
          <Button
            style={styles.AdjustButton}
            icon="pencil"
            mode="contained"
            compact="true"
            onPress={() => console.log("Pressed")}
          >
            Adjust Current Cycle
          </Button>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

function DisplayORM(reps, weight) {
  const max = Math.round(weight * (1 + 0.0333 * reps));
  return max ? max : "";
}

const styles = StyleSheet.create({
  ORMTitle: {
    marginTop: 20,
    alignSelf: "center",
  },
  ORMDisplay: {
    fontSize: 150,
    alignSelf: "center",
  },
  AdjustButton: {
    alignSelf: "center",
    width: "75%"
  }
});

export default OneRepMax;
