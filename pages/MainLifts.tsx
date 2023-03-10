import React from "react";
import {
    Keyboard,
    Text,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Provider, } from "react-native-paper";
import tw from 'twrnc';
import { GridTitles, GridWeeks, GridReps, GridSets } from "../constants/Lifts";

const MainLifts = () => {
    const [max, setMax] = React.useState('0');
    const calc = (percentage: number): string => {
        if (Number(max) > 999) {
            return 'NO';
        }
        const ninetyPercent: number = Number(max) * .9;
        const roundedNumberInStringFormat: string = (Math.round(((ninetyPercent / 100) * percentage) / 5) * 5).toFixed(0);
        return roundedNumberInStringFormat;
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={tw`flex-1`}>
                <Provider>
                    <Text style={tw`text-2xl self-center`}>Enter Your 1RM: {Number(max) > 999 ? 'MAAAN' : max}</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={tw`mx-8 my-6`}
                        label="1RM"
                        value={max}
                        onChangeText={(x) => setMax(x)}
                    />
                    <View style={styles.Grid}>
                        <Row>
                            {GridTitles.map(title => (
                                <Column key={title}>
                                    <Text style={tw`text-lg text-center`}>{title}</Text>
                                </Column>
                            ))}
                        </Row>
                        <Row>
                            <Column>
                                <Text style={tw`text-lg text-center`}>{GridWeeks[0]}</Text>
                            </Column>
                            <Column>
                                <Text style={tw`text-lg text-center`}>{GridSets}</Text>
                            </Column>
                            <Column>
                                <Text style={tw`text-lg text-center`}>{GridReps[0]}</Text>
                            </Column>
                            <Column>
                                <Text style={tw`text-sm text-center my-auto`}>{calc(65)},{calc(75)},{calc(85)}+</Text>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <Text style={tw`text-lg text-center`}>{GridWeeks[1]}</Text>
                            </Column>
                            <Column>
                                <Text style={tw`text-lg text-center`}>{GridSets}</Text>
                            </Column>
                            <Column>
                                <Text style={tw`text-lg text-center`}>{GridReps[1]}</Text>
                            </Column>
                            <Column>
                                <Text style={tw`text-sm text-center my-auto`}>{calc(70)},{calc(80)},{calc(90)}+</Text>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <Text style={tw`text-lg text-center`}>{GridWeeks[2]}</Text>
                            </Column>
                            <Column>
                                <Text style={tw`text-lg text-center`}>{GridSets}</Text>
                            </Column>
                            <Column>
                                <Text style={tw`text-lg text-center`}>{GridReps[2]}</Text>
                            </Column>
                            <Column>
                                <Text style={tw`text-sm text-center my-auto`}>{calc(75)},{calc(85)},{calc(95)}+</Text>
                            </Column>
                        </Row>
                        <Row>
                            <Column>
                                <Text style={tw`text-lg text-center`}>{GridWeeks[3]}</Text>
                            </Column>
                            <Column>
                                <Text style={tw`text-lg text-center`}>{GridSets}</Text>
                            </Column>
                            <Column>
                                <Text style={tw`text-lg text-center`}>{GridReps[3]}</Text>
                            </Column>
                            <Column>
                                <Text style={tw`text-sm text-center my-auto`}>{calc(40)},{calc(50)},{calc(60)}</Text>
                            </Column>
                        </Row>
                    </View>
                </Provider>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    Grid: {
        flex: 4,
        marginHorizontal: "auto",
        width: "auto",
        height: 400,
    },
    Col: {
        borderColor: "#fff",
        borderWidth: 1,
        flex: 1,
    },
});

const Row = ({ children }: any) => {
    return (
        <View style={tw`flex-row`}>{children}</View>
    );
}

const Column = ({ children }: any) => {
    return (
        <View style={styles.Col}>{children}</View>
    );
}

export default MainLifts;