import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ActivityIndicator } from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../config/Apis/ApiInstance";

export default function Schedule() {

    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(false);

    const sendSchedule = async () => {
        if (!model.name || !model.category || !model.email || !model.phone || !model.date || !model.time) {
            return Toast.show({ type: 'error', text1: 'Validation error', text2: 'Please fill all fields' });
        }
        try {
            setLoading(true);
            await ApiInstance.post('/user/schedule', model);
            Toast.show({ type: 'success', text1: 'Sent', text2: 'Your schedule has been submitted' });
            setModel({}); 
        } catch (error) {
            console.log(error);
            Toast.show({ type: 'error', text1: 'Failed', text2: 'Check your internet connection' });
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Set Your Schedule</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="User name" placeholderTextColor="#B5B5B5"
                    value={model.name} onChangeText={(e) => setModel({ ...model, name: e })} />

                <TextInput style={styles.input} placeholder="Category" placeholderTextColor="#B5B5B5"
                    value={model.category} onChangeText={(e) => setModel({ ...model, category: e })} />

                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#B5B5B5"
                    value={model.email} onChangeText={(e) => setModel({ ...model, email: e })} />

                <TextInput style={styles.input} placeholder="Phone" keyboardType="number-pad" placeholderTextColor="#B5B5B5"
                    value={model.phone} onChangeText={(e) => setModel({ ...model, phone: e })} />

                <TextInput style={styles.input} placeholder="Date" placeholderTextColor="#B5B5B5"
                    value={model.date} onChangeText={(e) => setModel({ ...model, date: e })} />

                <TextInput style={styles.input} placeholder="Time" placeholderTextColor="#B5B5B5"
                    value={model.time} onChangeText={(e) => setModel({ ...model, time: e })} />
            </View>

            <TouchableOpacity style={[styles.button, loading && styles.disabledButton]}
                onPress={sendSchedule} disabled={loading}>
                {loading ? <ActivityIndicator color="black" /> : <Text style={styles.buttonText}>Submit Schedule</Text>}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#C7A17A',
        marginBottom: 20,
        textTransform: 'uppercase',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20
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
        backgroundColor: '#C7A17A',
        padding: 15,
        borderRadius: 12,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#C7A17A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    disabledButton: {
        backgroundColor: '#A58B66', // Lighter Shade for Disabled Button
    },
});
