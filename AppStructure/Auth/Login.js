import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, ActivityIndicator, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../config/Apis/ApiInstance";

export default function Login() {
    const [model, setModel] = useState({});
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const login = async () => {
        await ApiInstance.post("/auth/Login", model)
            .then((res) => {
                setLoading(true)
                const { role } = res.data;

                if (role === "admin") {
                    Toast.show({
                        type: "success",
                        position: "top",
                        text1: "Admin Login",
                        text2: "Welcome Admin!",
                    });
                    setLoading(false)
                    navigation.navigate("Admin");
                } else if (role === "user") {
                    Toast.show({
                        type: "success",
                        position: "top",
                        text1: "User Login",
                        text2: "Welcome User!",
                    });
                    setLoading(false)
                    navigation.navigate("Home");
                }
            })
            .catch((err) => {
                console.log(err, "error");
                Toast.show({
                    type: "error",
                    position: "top",
                    text1: "Error",
                    text2: "Please provide a valid email and password",
                });
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome Back</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#C7A17A" keyboardType="email-address" onChangeText={(e) => setModel({ ...model, email: e })} />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#C7A17A" secureTextEntry onChangeText={(e) => setModel({ ...model, password: e })} />
            </View>
            <TouchableOpacity style={[styles.button, loading && styles.disabledButton]} onPress={login} disabled={loading}>
                {loading ? <ActivityIndicator color="black" /> : <Text style={styles.buttonText}>Login</Text>}
            </TouchableOpacity>
            <Text style={styles.footerText}>Don't have an account?
                <TouchableOpacity onPress={() => !loading && navigation.navigate('SignUp')} disabled={loading}>
                    <Text style={[styles.link, loading && styles.disabledLink]}> Sign Up</Text>
                </TouchableOpacity>
            </Text>
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
        fontSize: 30,
        fontWeight: 'bold',
        color: '#C7A17A',
        marginBottom: 20,
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    inputContainer: {
        width: '100%',
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
        backgroundColor: '#C7A17A',
        padding: 16,
        borderRadius: 12,
        width: '100%',
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
        backgroundColor: '#888',
    },
    footerText: {
        color: '#B5B5B5',
        marginTop: 20,
        fontSize: 16,
    },
    link: {
        color: '#C7A17A',
        fontWeight: 'bold',
    },
    disabledLink: {
        color: '#888',
    }
});
