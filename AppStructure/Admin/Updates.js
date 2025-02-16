import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, ActivityIndicator, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../config/Apis/ApiInstance";

export default function Updates() {
    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(false);

    const postUpdate = async () => {
        if (!model.name || !model.price || !model.category || !model.limitedTime) {
            return Toast.show({ type: 'error', text1: 'Validation Error', text2: 'Please provide all fields' });
        }
        try {
            setLoading(true);
            await ApiInstance.post('/user/updates', model);
            Toast.show({ type: 'success', text1: 'Posted Successfully' });
            setModel({});
        } catch (error) {
            console.log(error);
            Toast.show({ type: 'error', text1: 'Error', text2: 'Something went wrong' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Post Updates For Users</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Name"
                    placeholderTextColor="#B5B5B5"
                    style={styles.input}
                    value={model.name}
                    onChangeText={(e) => setModel({ ...model, name: e })}
                />
                <TextInput
                    placeholder="Price"
                    placeholderTextColor="#B5B5B5"
                    style={styles.input}
                    keyboardType="numeric"
                    value={model.price}
                    onChangeText={(e) => setModel({ ...model, price: e })}
                />
                <TextInput
                    placeholder="Category"
                    placeholderTextColor="#B5B5B5"
                    style={styles.input}
                    value={model.category}
                    onChangeText={(e) => setModel({ ...model, category: e })}
                />
                <TextInput
                    placeholder="Limited Time"
                    placeholderTextColor="#B5B5B5"
                    style={styles.input}
                    value={model.limitedTime}
                    onChangeText={(e) => setModel({ ...model, limitedTime: e })}
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={postUpdate}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator size="small" color="#000" />
                ) : (
                    <Text style={styles.buttonText}>Post Update</Text>
                )}
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
        fontSize: 22,
        fontWeight: "bold",
        color: "#C7A17A",
        textAlign: "center",
        marginBottom: 20,
        textTransform: "uppercase",
    },
    inputContainer: {
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
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#C7A17A",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        textTransform: "uppercase",
    },
});
