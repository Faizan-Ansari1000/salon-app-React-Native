import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function MenService() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome Gentlemen</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HairCut')}>
                    <Text style={styles.buttonText}>Haircuts & Grooming</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Beard')}>
                    <Text style={styles.buttonText}>Beard Styling & Shaving</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FacialMen')}>
                    <Text style={styles.buttonText}>Facial & Skincare</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MenRelaxation')}>
                    <Text style={styles.buttonText}>Massage & Relaxation</Text>
                </TouchableOpacity>
            </View>
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
        marginBottom: 30,
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#C7A17A',
        padding: 15,
        borderRadius: 12,
        width: '80%',
        alignItems: 'center',
        marginBottom: 15,
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