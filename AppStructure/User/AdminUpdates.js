import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View, ActivityIndicator, StyleSheet } from "react-native";
import ApiInstance from "../config/Apis/ApiInstance";

export default function AdminUpdates() {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get('/user/updates');
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
            <Text style={styles.title}>Latest Updates</Text>

            {loading && <ActivityIndicator size="large" color="#C7A17A" style={styles.loader} />}

            <FlatList
                data={postData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.info}><Text style={styles.heading}>Price:</Text> {item.price}</Text>
                        <Text style={styles.info}><Text style={styles.heading}>Category:</Text> {item.category}</Text>
                        <Text style={styles.info}><Text style={styles.heading}>Limited Time:</Text> {item.limitedTime}</Text>
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
        color: "white",
        marginBottom: 3,
    },
    heading: {
        fontWeight: "bold",
        color: "#C7A17A",
    },
});
