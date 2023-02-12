import { Text, View, Pressable, ImageBackground, Dimensions } from "react-native";
import tw from "twrnc";
import { NewCycle } from "../models/Cycle";
import { storeData, getData, getAllKeys, clearAll } from "../localDB/localDB";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { HomeScreenNavigationProps } from "../types/Core";

function HomeScreen({ navigation }: HomeScreenNavigationProps) {
  return (
    <View style={tw`bg-black w-full h-full`}>
      <ImageBackground
        source={require("../assets/samuel-girven-gym-unsplash.jpg")}
        resizeMode="stretch"
        style={tw`h-full w-full`}
        imageStyle={tw`h-full w-full`}
      >
        <View style={tw`flex flex-col h-full justify-between`}>
          <Text style={tw`text-center text-3xl font-bold text-white mt-5`}>FiveThreeOne</Text>
          <View style={tw`flex flex-row mx-4 justify-between mb-10`}>
            <Pressable
              style={tw`flex flex-col p-2 bg-black border-2 border-white rounded-full`}
              onPress={() => navigation.navigate("OneRepMax")}
            >
              <Text style={tw`text-xs text-white`}>Calc 1RM</Text>
              <Icon style={tw`mx-auto`} color="white" name="dumbbell" />
            </Pressable>
            <Pressable
              style={tw`flex flex-col p-2 bg-black border-2 border-white rounded-full`}
              onPress={() => navigation.navigate("MainLifts")}
            >
              <Text style={tw`text-xs text-white`}>Calc Cycle</Text>
              <Icon style={tw`mx-auto`} color="white" name="clock" />
            </Pressable>
            <Pressable
              style={tw`flex flex-col py-2 px-4 bg-black border-2 border-white rounded-full`}
              onPress={() => navigation.navigate("PersonalRecords")}
            >
              <Text style={tw`text-xs text-white`}>PRs</Text>
              <Icon style={tw`mx-auto`} color="white" name="clipboard" />
            </Pressable>
            <Pressable
              style={tw`flex flex-col p-2 bg-black border-2 border-white rounded-full`}
              onPress={CreateNewCycle}
            >
              <Text style={tw`text-xs text-white`}>Create Cylce</Text>
              <Icon style={tw`mx-auto`} color="white" name="weight-hanging" />
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

async function CreateNewCycle() {
   //const cycle = NewCycle;
  //storeData(NewCycle)
  //console.log(await getAllKeys())
  //clearAll()
}

export default HomeScreen;
