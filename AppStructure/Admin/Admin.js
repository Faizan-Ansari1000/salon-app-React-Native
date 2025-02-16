import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Admin() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Admin</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegUsers')}>
                    <Text style={styles.buttonText}>Registered Users</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bookings')}>
                    <Text style={styles.buttonText}>Bookings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ComplainUser')}>
                    <Text style={styles.buttonText}>Complaints</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Updates')}>
                    <Text style={styles.buttonText}>Post</Text>
                </TouchableOpacity>
            </View>
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
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#C7A17A",
        marginBottom: 30,
        textTransform: "uppercase",
        letterSpacing: 2,
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#C7A17A",
        paddingVertical: 16,
        paddingHorizontal: 30,
        borderRadius: 10,
        width: "80%",
        alignItems: "center",
        marginVertical: 10,
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
