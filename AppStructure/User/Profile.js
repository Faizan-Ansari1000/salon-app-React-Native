import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import ApiInstance from "../config/Apis/ApiInstance";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchProfile = async () => {
            const userId = await AsyncStorage.getItem("userId");
            console.log("Fetching Profile for User ID:", userId); 
            if (!userId) return;

            try {
                const res = await ApiInstance.get(`/auth/profile/${userId}`);
                console.log("Profile API Response:", res.data); 
                if (res.data.isSuccessfully) {
                    setUser(res.data.data);
                }
            } catch (error) {
                console.log("Error fetching profile", error);
            }
            setLoading(false);
        };
        fetchProfile();
    }, []);

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#C7A17A" />
                <Text style={styles.loadingText}>Loading Profile...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {user ? (
                <View style={styles.profileCard}>
                    <Image 
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHkfz_guI40FYx1i42v9eUWWlgwCLPEZDoSg&s" }} 
                        style={styles.profileImage} 
                    />
                    <Text style={styles.heading}>{user.name}</Text>
                    <Text style={styles.info}>{user.email}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Go to Home</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <Text style={styles.noProfile}>No profile found</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        padding: 20,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    loadingText: {
        color: "#C7A17A",
        marginTop: 10,
        fontSize: 18,
    },
    profileCard: {
        width: "90%",
        backgroundColor: "rgba(46, 46, 46, 0.9)",
        padding: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#C7A17A",
        alignItems: "center",
        shadowColor: "#C7A17A",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 6,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#C7A17A",
        marginBottom: 10,
    },
    heading: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#C7A17A",
        marginBottom: 10,
        textTransform: "uppercase",
    },
    info: {
        fontSize: 18,
        color: "white",
        marginBottom: 15,
    },
    noProfile: {
        fontSize: 18,
        color: "#C7A17A",
    },
    button: {
        backgroundColor: "#C7A17A",
        padding: 14,
        borderRadius: 12,
        width: "80%",
        alignItems: "center",
        shadowColor: "#C7A17A",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },
    buttonText: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});