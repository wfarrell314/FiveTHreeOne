import { Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { NewCycle } from "../models/Cycle";
import { storeData, getData, getAllKeys, clearAll } from "../localDB/localDB";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { HomeScreenNavigationProps } from "../types/Core";

function HomeScreen({ navigation }: HomeScreenNavigationProps) {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`flex flex-col h-full justify-between`}>
        <Text style={tw`text-center text-3xl font-bold`}>FiveThreeOne</Text>
        <View style={tw`flex flex-row mx-4 justify-between`}>
          <Pressable
            style={tw`flex flex-col`}
            onPress={() => navigation.navigate("OneRepMax")}
          >
            <Text style={tw`text-xs text-sky-400`}>Calc 1RM</Text>
            <Icon style={tw`mx-auto`} name="dumbbell" />
          </Pressable>
          <Pressable
            style={tw`flex flex-col`}
            onPress={() => navigation.navigate("MainLifts")}
          >
            <Text style={tw`text-xs text-sky-400`}>Calc Cycle</Text>
            <Icon style={tw`mx-auto`} name="clock" />
          </Pressable>
          <Pressable
            style={tw`flex flex-col`}
            onPress={() => navigation.navigate("PersonalRecords")}
          >
            <Text style={tw`text-xs text-sky-400`}>PRs</Text>
            <Icon style={tw`mx-auto`} name="clipboard" />
          </Pressable>
          <Pressable
            style={tw`flex flex-col`}
            onPress={CreateNewCycle}
          >
            <Text style={tw`text-xs text-sky-400`}>Create Cylce</Text>
            <Icon style={tw`mx-auto`} name="weight-hanging" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

async function CreateNewCycle() {
   //const cycle = NewCycle;
  //storeData(NewCycle)
  //console.log(await getAllKeys())
  //clearAll()
}

export default HomeScreen;
