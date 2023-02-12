import React from "react";
import {
    Keyboard,
    Text,
    View,
    TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider, Portal, Modal, TextInput, Button } from "react-native-paper";
import tw from 'twrnc';
import { Categories } from "../constants/Lifts";
import { getAllKeys, setPR, getMultiplePRs } from "../localDB/localDB";

const PRs = () => {
    const [lifts, setLifts] = React.useState<any[]>([]);
    const [showModal, setShowModal] = React.useState(false);
    const [selectedLift, setSelectedLift] = React.useState('');
    const [max, setMax] = React.useState('');

    const fetchData = React.useCallback(async () => {
        const keys = await getAllKeys();
        const keysWithValues = await getMultiplePRs(keys);
        const flattenedList = keysWithValues.flat();
        setLifts(flattenedList);
    }, [])
    React.useEffect(() => {
        fetchData()
            .catch(console.error)
    }, [fetchData]);
    const openModal = (lift: string) => {
        setSelectedLift(lift);
        setShowModal(true);
    }
    const closeModal = async () => {
        setShowModal(false);
        setSelectedLift('');
        setMax('');
        await fetchData();
    }
    const setPRFromModal = async (lift: string, max: string) => {
        closeModal();
        await setPR(lift, max);
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
                                        <Text onPress={() => openModal(subcategory)} style={tw``}>
                                            {lifts.indexOf(subcategory) !== -1 ? lifts[lifts.indexOf(subcategory) + 1] : '0'}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </View>
                </Provider>
                <Portal>
                    <Modal
                        visible={showModal}
                        onDismiss={closeModal}
                        contentContainerStyle={tw`bg-white p-5 self-center h-60 w-98`}
                    >
                        <View style={tw`mx-auto`}>
                            <Text style={tw`text-center font-bold`}>{selectedLift}</Text>
                            <TextInput
                                keyboardType="numeric"
                                style={tw`w-36 mt-8 mx-auto`}
                                label="Weight"
                                value={max}
                                onChangeText={(text: any) => setMax(text)}
                            />
                            <Button
                                disabled={max.length ? false : true}
                                buttonColor="#6f47bf"
                                contentStyle={tw`h-12`}
                                style={tw`justify-center mt-5 self-center w-52 h-12`}
                                mode="contained"
                                onPress={() => setPRFromModal(selectedLift, max)}
                            >
                                Update
                            </Button>
                        </View>
                    </Modal>
                </Portal>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default PRs;