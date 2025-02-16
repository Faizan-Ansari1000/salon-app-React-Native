import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import ApiInstance from "../config/Apis/ApiInstance";
import { useEffect, useState } from "react";

export default function ComplainUser() {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get('/user/complain');
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
            <Text style={styles.title}>Complaints</Text>

            {loading && <ActivityIndicator size="large" color="#C7A17A" style={styles.loader} />}

            <FlatList
                data={postData}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.name}>{item.name}</Text>

                        <Text style={styles.info}>
                            <Text style={styles.heading}>Email: </Text>
                            <Text style={styles.data}>{item.email}</Text>
                        </Text>

                        <Text style={styles.info}>
                            <Text style={styles.heading}>Phone: </Text>
                            <Text style={styles.data}>{item.phone}</Text>
                        </Text>

                        <Text style={styles.info}>
                            <Text style={styles.heading}>Category: </Text>
                            <Text style={styles.data}>{item.category}</Text>
                        </Text>

                        <Text style={styles.info}>
                            <Text style={styles.heading}>Message: </Text>
                            <Text style={styles.data}>{item.message}</Text>
                        </Text>
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
        textAlign: "center",
        marginBottom: 20,
        textTransform: "uppercase",
        letterSpacing: 2,
    },
    loader: {
        marginVertical: 20,
    },
    card: {
        backgroundColor: "#1E1E1E",
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
        shadowColor: "#C7A17A",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#C7A17A",
        marginBottom: 5,
    },
    info: {
        fontSize: 15,
        marginBottom: 3,
    },
    heading: {
        fontWeight: "bold",
        color: "#C7A17A",
    },
    data: {
        color: "white",
    },
});
