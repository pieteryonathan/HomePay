import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving data', error);
        throw error; // Optional: rethrow error for higher-level handling
    }
};

export const getItem = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value ? JSON.parse(value) : [];
    } catch (error) {
        console.error('Error retrieving data', error);
        throw error; // Optional: rethrow error for higher-level handling
    }
};

export const removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.error('Failed to remove the data from storage', e);
    }
};

export const mergeItem = async (key, value) => {
    try {
        await AsyncStorage.mergeItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error merging item:', error);
    }
};

export const clear = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.error('Error clearing AsyncStorage:', error);
    }
};

export const getAllKeys = async () => {
    try {
        return await AsyncStorage.getAllKeys();
    } catch (error) {
        console.error('Error getting all keys:', error);
        return [];
    }
};

export const getAllItems = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);
        return items.reduce((accumulator, [key, value]) => {
            accumulator[key] = JSON.parse(value);
            return accumulator;
        }, {});
    } catch (error) {
        console.error('Error getting all items:', error);
        return {};
    }
};