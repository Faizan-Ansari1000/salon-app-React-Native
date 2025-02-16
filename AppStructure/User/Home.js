import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { launchCamera } from "react-native-image-picker";

export default function Home() {
    const navigation = useNavigation();

    const openCamera = async () => {
        try {
            const result = await launchCamera({ mediaType: "photo" });
            console.log("Camera Result:", result);
        } catch (error) {
            console.log("Camera Error:", error);
        }
    };

    navigation.setOptions({
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "#C7A17A",
        headerRight: () => (
            <View style={{ flexDirection: "row", marginStart: 55 }}>
                <TouchableOpacity onPress={() => navigation.navigate('AdminUpdates')}>
                    <Icon name="update" style={{ marginRight: 15 }} size={22} color="#C7A17A" />
                </TouchableOpacity>
                <TouchableOpacity onPress={openCamera}>
                    <Icon name="photo-camera" size={22} color="#C7A17A" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => navigation.navigate("Profile")}
                >
                    <Icon name="account-circle" size={22} color="#C7A17A" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginLeft: 10, marginRight: 1 }}
                    onPress={() => navigation.navigate("Complain")}
                >
                    <Icon name="report-problem" size={22} color="#C7A17A" />
                </TouchableOpacity>
            </View>
        ),
    });

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to GlamSphere</Text>
            <Text style={styles.subtitle}>Discover luxury beauty services at your fingertips.</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Services')}>
                <Text style={styles.buttonText}>Explore Services</Text>
            </TouchableOpacity>
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
    welcomeText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#C7A17A",
        marginBottom: 10,
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: 2,
    },
    subtitle: {
        fontSize: 18,
        color: "#B5B5B5",
        marginBottom: 30,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#C7A17A",
        padding: 16,
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
        letterSpacing: 1,
    },
});
