import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ActivityIndicator } from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../config/Apis/ApiInstance";

export default function Complain() {
    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(false);

    const sendComplain = async () => {
        if (!model.name || !model.email || !model.category || !model.phone || !model.message) {
            return Toast.show({ type: 'error', text1: 'Validation Error', text2: 'Please fill all fields' });
        }
        try {
            setLoading(true);
            await ApiInstance.post('/user/complain', model);
            Toast.show({ type: 'success', text1: 'Success', text2: 'Your complaint has been submitted' });
            setModel({});
        } catch (error) {
            console.log(error);
            Toast.show({ type: 'error', text1: 'Failed', text2: 'Please try again' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Complaint Form</Text>
            <View style={styles.formContainer}>
                <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#B5B5B5" onChangeText={(e) => setModel({ ...model, name: e })} />
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#B5B5B5" onChangeText={(e) => setModel({ ...model, email: e })} keyboardType="email-address" />
                <TextInput style={styles.input} placeholder="Phone" placeholderTextColor="#B5B5B5" onChangeText={(e) => setModel({ ...model, phone: e })} keyboardType="phone-pad" />
                <TextInput style={styles.input} placeholder="Category" placeholderTextColor="#B5B5B5" onChangeText={(e) => setModel({ ...model, category: e })} />
                <TextInput style={styles.input} placeholder="Message" placeholderTextColor="#B5B5B5" onChangeText={(e) => setModel({ ...model, message: e })} multiline numberOfLines={4} />
            </View>
            <TouchableOpacity style={styles.button} onPress={sendComplain} disabled={loading}>
                {loading ? <ActivityIndicator color="black" /> : <Text style={styles.buttonText}>Submit Complaint</Text>}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#C7A17A",
        textAlign: "center",
        marginBottom: 20,
        textTransform: "uppercase",
        letterSpacing: 2,
    },
    formContainer: {
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: 'rgba(46, 46, 46, 0.8)',
        padding: 14,
        borderRadius: 12,
        fontSize: 16,
        marginBottom: 12,
        color: '#fff',
        borderWidth: 1,
        borderColor: '#C7A17A',
    },
    button: {
        backgroundColor: "#C7A17A",
        padding: 16,
        borderRadius: 12,
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