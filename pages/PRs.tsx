import React from "react";
import {
    Keyboard,
    Text,
    View,
    TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider, } from "react-native-paper";
import tw from 'twrnc';
import { Categories } from "../constants/Lifts";

const PRs = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={tw`flex-1`}>
                <Provider>
                    <View style={tw`flex flex-col`}>
                        {Categories.map(category => (
                            <View style={tw`mx-4`} key={category.title}>
                                <Text style={tw`text-xl font-semibold underline`}>{category.title}</Text>
                                {category.subCategories.map(subcategory => (
                                    <View key={subcategory} style={tw`flex flex-row justify-between my-1`}>
                                        <Text style={tw``}>{subcategory}</Text>
                                        <Text style={tw``}>0</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </View>
                </Provider>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default PRs;