import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";


export interface Lifts {
    DEADLIFT: string;
    BENCHPRESS: string;
    OVERHEADPRESS: string;
    BACKSQUAT: string;
}

export interface LiftLabelValue {
    label: string;
    value: string;
}

export interface LiftCategory {
    title: string;
    subCategories: string[];
}

export type RootStackParamList = {
    Home: {
        name: string
    };
    OneRepMax: {
        name: string
    };
    MainLifts: {
        name: string
    };
    PersonalRecords: {
        name: string
    };
}

type NavigationProps = NativeStackNavigationProp<ParamListBase>;

export type HomeScreenNavigationProps = {
    navigation: NavigationProps;
}
