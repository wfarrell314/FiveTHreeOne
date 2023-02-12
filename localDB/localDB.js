import AsyncStorage from '@react-native-async-storage/async-storage';

// Documentation for using AsyncStorage
// https://react-native-async-storage.github.io/async-storage/docs/api


// Using a timestamp as the key when saving a Cycle
export async function storeData(value) {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(new Date().toLocaleString(), jsonValue)
  } catch (e) {
    console.log(e)
  }
}

export async function getData(id) {
  try {
    const jsonValue = await AsyncStorage.getItem(id)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch(e) {
    console.log(e)
  }
}

export async function getAllKeys() {
  let keys = []
  try {
    keys = await AsyncStorage.getAllKeys()
  } catch(e) {
    console.log(e)
  }

return keys
}

// This will essentially remove everything from native storage and wipe the store
export async function clearAll() {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    console.log(e)
  }

}