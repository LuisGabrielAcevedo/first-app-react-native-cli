import AsyncStorage from '@react-native-community/async-storage';

export const asyncStorageSetItem = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    return e;
  }
};

export const asyncStorageGetItem = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    return e;
  }
};

export const asyncStorageClear = async () => {
  try {
    return await AsyncStorage.clear(key);
  } catch (e) {
    return e;
  }
};
