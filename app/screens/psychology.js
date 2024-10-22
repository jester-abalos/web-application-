import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

function PsychologyScreen() {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.header, { fontFamily: 'Poppins-ExtraBold', color: 'white', marginTop: 100, fontWeight: 'bold', marginBottom: 10, fontSize: 26, textAlign: 'left', padding: 30 }]}>
                        What is Psychology?
                    </Text>
                </View>

                <View style={[styles.paragraphContainer, { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 20, marginTop: 20 }]}>
                    <Text style={{ fontFamily: 'Poppins-ExtraBold', fontSize: 32,left: 90, marginTop: 67, }}>PSYCHOLOGY</Text>
                    <Image source={require('../assets/img/PSYCHOLOGY.png')} style={[styles.image, { resizeMode: 'contain', width: '20%', alignSelf: 'flex-end', right: 230 }]} />
                    <Image source={require('../assets/img/psy.png')} style={[styles.image, { resizeMode: 'contain', width: '100%', marginTop: 1, alignSelf: 'center' }]} />
<<<<<<< HEAD
                    <Text style={{ fontFamily: 'Poppins-ExtraBold', padding: 40, fontSize: 23 }}>
=======
                    <Text style={{ fontFamily: 'Poppins-Regular', padding: 40, fontSize: 23 }}>
>>>>>>> f4e3a0d (next part)
                    Psychology is under social sciences, it is the scientific study of the mind and behavior. It explores various aspects of human experience, including thoughts, emotions, motivations, 
and social interactions. Psychologists aim to understand how individuals think, feel, and 
act in different contexts.                   
 </Text>
                </View>
            </ScrollView>
            <View style={styles.navContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack('Home')}>
<<<<<<< HEAD
                    <Text style={[styles.buttonText, { fontFamily: 'Poppins-ExtraBold' }]}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
                    <Text style={[styles.buttonText, { fontFamily: 'Poppins-ExtraBold' }]}>About</Text>
=======
                    <Text style={[styles.buttonText, { fontFamily: 'Poppins-Regular' }]}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
                    <Text style={[styles.buttonText, { fontFamily: 'Poppins-Regular' }]}>About</Text>
>>>>>>> f4e3a0d (next part)
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8312C2',
    },
    itemContainer: {
        flex: 1,
    },
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: '#FAEDFF',
        paddingTop: 9,
    },
    button: {
<<<<<<< HEAD
        backgroundColor: '#33cccc',
        padding: 20,
=======
        backgroundColor: '#ba42ff',
        padding: 10,
>>>>>>> f4e3a0d (next part)
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        width: 100,
<<<<<<< HEAD
=======
        
>>>>>>> f4e3a0d (next part)
    },
    buttonText: {
        textAlign: "center",
        fontFamily: 'Poppins-ExtraBold',
<<<<<<< HEAD
=======
        color: 'white',
>>>>>>> f4e3a0d (next part)
    },
    image: {
        width: '33%',
        height: 200,
    },
    paragraphContainer: {
        padding: 20,
        backgroundColor: '#FAEDFF',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    paragraph: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20,
        fontFamily: 'Poppins-ExtraBold',
    },
    scrollView: {
        padding: 20,
    },
});

export default PsychologyScreen;


