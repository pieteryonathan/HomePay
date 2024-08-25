import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthManager {
    static async signIn(email, password) {
        try {
            const storedUsers = await AsyncStorage.getItem('user_data');
            const users = storedUsers ? JSON.parse(storedUsers) : [];
            const user = users.find(user => user.email === email);

            if (user && user.password === password) {
                // Store the signed-in user's information
                await AsyncStorage.setItem('current_user', JSON.stringify(user));
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
            throw error;
        }
    }

    static async signOut() {
        try {
            await AsyncStorage.removeItem('current_user');
        } catch (error) {
            console.error('Error during sign-out:', error);
        }
    }

    static async getCurrentUser() {
        try {
            const user = await AsyncStorage.getItem('current_user');
            return user ? JSON.parse(user) : null;
        } catch (error) {
            console.error('Error fetching current user:', error);
            return null;
        }
    }
}

export default AuthManager;