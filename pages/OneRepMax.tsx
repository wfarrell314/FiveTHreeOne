import React from "react";
import {
  Keyboard,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button, Provider, Modal, Portal } from "react-native-paper";
import RadioButtonRN from "radio-buttons-react-native";
import { LiftList } from "../constants/Lifts";
import { HomeScreenNavigationProps } from "../types/Core";
import tw from "twrnc";

function OneRepMax({ navigation }: HomeScreenNavigationProps) {
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
      <SafeAreaView style={tw`flex-1`}>
        <Provider>
          <Text style={tw`text-2xl self-center mb-12`}>Calculate One Rep Max</Text>
          <View style={tw`flex flex-row flex-wrap justify-center`}>
            <View>
              <TextInput
                keyboardType="numeric"
                style={tw`mr-12 w-36`}
                label="Reps"
                value={reps}
                onChangeText={(text: any) => setReps(text)}
              />
            </View>
            <View>
              <TextInput
                keyboardType="numeric"
                style={tw`w-36`}
                label="Weight"
                value={weight}
                onChangeText={(text: any) => setWeight(text)}
              />
            </View>
          </View>
          <View>
            <Text style={tw`mt-12 text-9xl self-center`}>{OMRValue}</Text>
            <Button
              buttonColor="#6f47bf"
              contentStyle={tw`h-20`}
              disabled={OMRValue ? false : true}
              style={tw`self-center justify-center mt-5 w-72 h-20`}
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
            contentContainerStyle={tw`bg-white p-5 self-center w-98`}
          >
            <View>
              <RadioButtonRN
                data={getRadioButtonData()}
                selectedBtn={(e: any) => setChecked(e)}
              />
              <Button
                disabled={checked ? false : true}
                buttonColor="#6f47bf"
                contentStyle={tw`h-12`}
                style={tw`justify-center mt-5 self-center w-52 h-12`}
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

function GetORMValue(reps: any, weight: any) {
  const max = Math.round(weight * (1 + 0.0333 * reps));
  return max ? max : "";
}

function getRadioButtonData() {
  return LiftList.map((x, i) => {
    return { label: x.label };
  });
}

export default OneRepMax;
