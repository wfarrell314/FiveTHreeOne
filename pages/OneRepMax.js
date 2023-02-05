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
import DropDown from "react-native-paper-dropdown";
import { LiftSelectList } from "../constants/Lifts";

function OneRepMax({ navigation }) {
  const [weight, setWeight] = React.useState();
  const [reps, setReps] = React.useState();
  const [showDropDown, setShowDropDown] = useState(false);
  const [lift, setLift] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView>
        <Text style={styles.ORMTitle}>One Rep Max</Text>
        <View>
          <TextInput
            keyboardType="numeric"
            style={styles.Input}
            label="Reps"
            value={reps}
            onChangeText={(text) => setReps(text)}
          />
        </View>
        <View>
          <TextInput
            style={styles.Input}
            keyboardType="numeric"
            label="Weight"
            value={weight}
            onChangeText={(text) => setWeight(text)}
          />
        </View>
        <View>
          <DropDown
            style={styles.Input}
            label={"Lift"}
            mode={"flat"}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={lift}
            setValue={setLift}
            list={LiftSelectList}
          />
        </View>
        <View>
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
  Input: {
    marginBottom: 10,
  },
  ORMTitle: {
    fontSize: 25,
    alignSelf: "center",
    marginBottom: 50,
  },
  ORMDisplay: {
    marginTop: 50,
    fontSize: 150,
    alignSelf: "center",
  },
  AdjustButton: {
    marginTop: 20,
    alignSelf: "center",
    width: "75%",
  },
});

export default OneRepMax;
