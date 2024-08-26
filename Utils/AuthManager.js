import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthManager {
    static async signIn(email, password) {
        try {
            console.log('Attempting to sign in with email:', email);

            // Retrieve user data from AsyncStorage
            const storedUsers = await AsyncStorage.getItem('user_data');
            console.log('Stored users:', storedUsers);

            // Parse stored users
            const users = storedUsers ? JSON.parse(storedUsers) : [];
            console.log('Parsed users:', users);

            // Ensure users is an array
            if (!Array.isArray(users)) {
                console.error('Expected users to be an array, but it is not.');
                return false;
            }

            // Find the user by email
            const user = users.find(user => user.email === email);
            console.log('User found:', user);

            if (user) {
                console.log('Comparing passwords:', user.password === password);
                if (user.password === password) {
                    console.log('Password correct. Setting current user.');
                    await AsyncStorage.setItem('current_user', JSON.stringify(user));
                    return true;
                }
            }

            return false;
        } catch (error) {
            console.error('Error during sign-in:', error);
            throw error;
        }
    }
    static async signOut() {
        try {
            await AsyncStorage.removeItem('current_user');
            return true; // Indicate that sign-out was successful
        } catch (error) {
            console.error('Error during sign-out:', error);
            return false; // Indicate that sign-out failed
        }
    }

    static async updateUser(updatedData) {
        try {
            await AsyncStorage.setItem('current_user', JSON.stringify(updatedData));
            console.log('User data updated successfully.');
        } catch (error) {
            console.error('Error updating user data:', error);
            throw error;
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