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

                <Text style={styles.title}>Payment Success, Yayy!</Text>
                
                <Text style={styles.subtitle}>
                    we will send order details and invoice in your contact no. and registered email.
                </Text>

                <TouchableOpacity 
                    style={{ marginVertical: 20, flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={{ color: '#5B6AF0', fontSize: 16, fontWeight: '600', marginRight: 8 }}>
                        Check Details
                    </Text>
                    <Ionicons name="arrow-forward" size={20} color="#5B6AF0" />
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
