import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/successStyles';

export default function SuccessScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            
            <View style={styles.content}>
                <Image 
                    source={require('../imgs/Group 167.jpg')} 
                    style={{ width: 281, height: 251, resizeMode: 'contain', marginBottom: 40 }}
                />

                <Image 
                    source={require('../imgs/Payment Success, Yayy!.jpg')}
                    style={{ width: 205, height: 17, resizeMode: 'contain', marginBottom: 16 }}
                />
                
                <Image 
                    source={require('../imgs/we will send order details and invoice in your contact no. and registered email.jpg')}
                    style={{ width: 250, height: 34, resizeMode: 'contain', marginBottom: 40 }}
                />

                <TouchableOpacity 
                    style={{ marginVertical: 20 }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Image 
                        source={require('../imgs/Group 168.jpg')}
                        style={{ width: 139, height: 24, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.secondaryButton, { backgroundColor: '#5B6AF0' }]}
                    onPress={() => {}}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '700' }}>Download Invoice</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
