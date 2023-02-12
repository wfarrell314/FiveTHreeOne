import React, { useState } from "react";
import {
  Keyboard,
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button, Provider, Modal, Portal } from "react-native-paper";
import RadioButtonRN from "radio-buttons-react-native";
import { LiftList } from "../constants/Lifts";

function OneRepMax({ navigation }) {
  const [weight, setWeight] = React.useState();
  const [reps, setReps] = React.useState();
  const [checked, setChecked] = React.useState(undefined);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => {
    setChecked(undefined)
    setVisible(true);
    Keyboard.dismiss();
  };
  const hideModal = () => setVisible(false);

  const OMRValue = GetORMValue(reps, weight);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.Container}>
        <Provider>
          <Text style={styles.ORMTitle}>Calculate One Rep Max</Text>
          <View style={styles.InputContainer}>
            <View>
              <TextInput
                keyboardType="numeric"
                style={styles.RepsInput}
                label="Reps"
                value={reps}
                onChangeText={(text) => setReps(text)}
              />
            </View>
            <View>
              <TextInput
                keyboardType="numeric"
                style={styles.WeightInput}
                label="Weight"
                value={weight}
                onChangeText={(text) => setWeight(text)}
              />
            </View>
          </View>
          <View>
            <Text style={styles.ORMDisplay}>{OMRValue}</Text>
            <Button
              buttonColor="#6f47bf"
              contentStyle={{ height: styles.AdjustButton.height }}
              disabled={OMRValue ? false : true}
              style={styles.AdjustButton}
              icon="pencil"
              mode="contained"
              onPress={showModal}
            >
              Adjust Current Cycle
            </Button>
          </View>
        </Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.ModalStyle}
          >
            <View>
              <RadioButtonRN
                data={getRadioButtonData()}
                selectedBtn={(e) => setChecked(e)}
              />
              <Button
                disabled={checked ? false : true}
                buttonColor="#6f47bf"
                contentStyle={{ height: styles.confirmButton.height }}
                style={styles.confirmButton}
                mode="contained"
                onPress={() => {
                  console.log("Update Pressed");
                }}
              >
                Update
              </Button>
            </View>
          </Modal>
        </Portal>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

function GetORMValue(reps, weight) {
  const max = Math.round(weight * (1 + 0.0333 * reps));
  return max ? max : "";
}

function getRadioButtonData() {
  return LiftList.map((x, i) => {
    return { label: x.label };
  });
}


const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "center",
    width: 300,
    height: 75,
  },
  InputContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  RepsInput: {
    marginRight: 50,
    width: 150,
  },
  WeightInput: {
    width: 150,
  },
  ModalStyle: {
    backgroundColor: "white",
    padding: 20,
    alignSelf: "center",
    width: 400,
  },
  Modalheading: {
    fontSize: 20,
    marginBottom: 20,
  },
  confirmButton: {
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "center",
    width: 200,
    height: 50,
  },
});

export default OneRepMax;
