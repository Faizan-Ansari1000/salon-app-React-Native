import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";

export default function Beard() {

    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Premium Beard Services</Text>
            <Text style={styles.subHeading}>Choose Your Style</Text>
            
            <View style={styles.gridContainer}>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Beard Trim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Beard Styling</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Hot Towel Shave</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Beard Coloring</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Beard Hydration</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Text style={styles.buttonText}>Scalp & Beard Massage</Text>
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
        textAlign: 'center'
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