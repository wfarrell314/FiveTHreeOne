import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { NewCycle } from "../models/Cycle";
import { Insert } from "../localDB/mongoDB";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={tw`bg-white flex-1 items-center justify-center`}>
      <View>
        <Text style={tw`text-center text-3xl font-bold`}>Home Screen</Text>
        <Button
          title="Calculate One Rep Max"
          onPress={() => navigation.navigate("OneRepMax")}
        />
        <Button
          title="Main Lifts"
          onPress={() => navigation.navigate("MainLifts")}
        />
        <Button
          title="PRs"
          onPress={() => navigation.navigate("PersonalRecords")}
        />
        <Button title="Create New Cycle" onPress={CreateNewCycle} />
      </View>
    </SafeAreaView>
  );
}

function CreateNewCycle() {

  Insert(NewCycle());
}

export default HomeScreen;
