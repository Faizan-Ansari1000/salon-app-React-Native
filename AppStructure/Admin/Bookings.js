import { useEffect, useState } from "react";
import { FlatList, Text,View, ActivityIndicator, StyleSheet } from "react-native";
import ApiInstance from "../config/Apis/ApiInstance";

export default function Bookings() {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get("/user/schedule");
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
            <Text style={styles.title}>Bookings</Text>

            {loading ? <ActivityIndicator size="large" color="#C7A17A" /> : null}

            <FlatList
                data={postData}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <Text style={styles.name}><Text>Name:</Text> {item.name}</Text>
                            <Text style={styles.detail}><Text style={styles.detailHeading}>Email:</Text> {item.email}</Text>
                            <Text style={styles.detail}><Text style={styles.detailHeading}>Category:</Text> {item.category}</Text>
                            <Text style={styles.detail}><Text style={styles.detailHeading}>Phone:</Text> {item.phone}</Text>
                            <Text style={styles.detail}><Text style={styles.detailHeading}>Date:</Text> {item.date}</Text>
                            <Text style={styles.detail}><Text style={styles.detailHeading}>Time:</Text> {item.time}</Text>
                        </View>
                    </View>
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
        backgroundColor: "rgba(30, 30, 30, 0.9)",
        borderWidth: 1.5,
        borderColor: "#C7A17A",
        padding: 20,
        marginBottom: 15,
        borderRadius: 12,
        shadowColor: "#C7A17A",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 8,
    },
    cardContent: {
        alignItems: "start",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#C7A17A",
        marginBottom: 8,
    },
    detail: {
        fontSize: 16,
        color: "#B5B5B5",
        marginBottom: 4,
    },
    detailHeading: {
        fontWeight:'bold',
        color:'#C7A17A'
    }
});
