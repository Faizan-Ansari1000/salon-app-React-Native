import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View, ActivityIndicator, StyleSheet } from "react-native";
import ApiInstance from "../config/Apis/ApiInstance";
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function RegUsers() {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get("/auth/signUp");
            console.log(res.data);
            setPostData(res.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registered Users</Text>

            {loading ? <ActivityIndicator size="large" color="#C7A17A" /> : null}

            <FlatList
                data={postData}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <View style={styles.cardContent}>
                            <View>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.email}>{item.email}</Text>
                            </View>
                            <Icon name="check-circle" color="#C7A17A" size={22} />
                        </View>
                    </TouchableOpacity>

                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#C7A17A",
        marginBottom: 20,
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: 2,
    },
    card: {
        backgroundColor: "#1E1E1E",
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: "#C7A17A",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },
    cardContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#C7A17A",
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: "#B5B5B5",
    },
});
