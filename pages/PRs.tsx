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
import { getAllKeys, getPR, setPR } from "../localDB/localDB";

const PRs = () => {
    // TODO: Figure out how to best use state with the async call
    const [allKeys, setAllKeys] = React.useState({});
    const [keysLoaded, setKeysLoaded] = React.useState(false);
    const [keysLoading, setKeysLoading] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [selectedLift, setSelectedLift] = React.useState('');
    React.useEffect(() => {
        const fetchData = async () => {
            if (!keysLoaded) {
                const data = await getAllKeys();
                setAllKeys(data);
            } else return;
        }
        fetchData()
            .catch(() => setKeysLoaded(true))
            .finally(() => {
                setKeysLoaded(true);
                console.log('did it work? keys are:', allKeys);
            });
    });
    const openModal = (lift: string) => {
        setSelectedLift(lift);
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
        setSelectedLift('');
    }
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