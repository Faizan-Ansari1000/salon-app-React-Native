import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";

export default function Manicure() {

    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Premium Manicure</Text>
            <Text style={styles.subHeading}>Choose Your Service</Text>
            
            <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Classic Manicure</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>French Manicure</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Gel Manicure</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Spa Manicure</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Paraffin Manicure</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Hot Oil Manicure</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Luxury Gold Manicure</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Cuticle Treatment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Exfoliating Hand Scrub</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Nail Strengthening Treatment</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.scheduleButton} onPress={() => navigation.navigate('Schedule')}>
                <Text style={styles.buttonText}>Select Schedule</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#C7A17A',
        marginBottom: 10,
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    subHeading: {
        fontSize: 18,
        color: '#B5B5B5',
        marginBottom: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
    },
    gridItem: {
        backgroundColor: '#C7A17A',
        padding: 15,
        borderRadius: 12,
        width: '45%',
        alignItems: 'center',
        margin: 5,
        shadowColor: '#C7A17A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },
    scheduleButton: {
        backgroundColor: '#C7A17A',
        padding: 15,
        borderRadius: 12,
        width: '80%',
        alignItems: 'center',
        marginTop: 20,
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
    }
});
