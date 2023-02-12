import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyValuePair } from '@react-native-async-storage/async-storage/lib/typescript/types';

// Documentation for using AsyncStorage
// https://react-native-async-storage.github.io/async-storage/docs/api


// Using a timestamp as the key when saving a Cycle
export async function storeData(value: any) {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(new Date().toLocaleString(), jsonValue)
  } catch (e) {
    console.log(e)
  }
}

export async function getData(id: any) {
  try {
    const jsonValue = await AsyncStorage.getItem(id)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch(e) {
    console.log(e)
  }
}

export async function getAllKeys() {
  let keys: any = []
  try {
    keys = await AsyncStorage.getAllKeys()
  } catch(e) {
    console.log(e)
  }

return keys
}

export const setPR = async (lift: string, weight: string) => {
  try {
    await AsyncStorage.setItem(`${lift}`, `${weight}`)
  } catch(e) {
    console.log(e);
  }
}

export const getPR = async (lift: string) => {
  try {
    const response = await AsyncStorage.getItem(`${lift}`);
    if (response !== null) {
      return response;
    } else {
      console.log('nothing is there...');
    }
  } catch(e) {
    console.log(e);
  }
}

export const getMultiplePRs = async (lifts: string[]) => {
  let values:any = [];
  try {
    values = await AsyncStorage.multiGet(lifts)
    return values;
  } catch(e) {
    console.log(e);
  }
}

// This will essentially remove everything from native storage and wipe the store
export async function clearAll() {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    console.log(e)
  }
}