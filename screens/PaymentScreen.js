import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Image,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from './styles/paymentStyles';

export default function PaymentScreen({ navigation }) {
    const [activeTab, setActiveTab] = useState('credit');

    const handlePay = () => {
        navigation.navigate('Success');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
            <KeyboardAvoidingView 
                style={{ flex: 1 }} 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Header */}
                    <View style={styles.header}>
                        <TouchableOpacity 
                            style={styles.backButton} 
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="chevron-back" size={24} color="#5B6AF0" />
                        </TouchableOpacity>
                        
                        <View style={styles.headerTitleContainer}>
                            <Image 
                                source={require('../imgs/Checkout 💳.jpg')}
                                style={{ width: 129, height: 22, resizeMode: 'contain' }}
                            />
                        </View>
                        
                        <View style={styles.headerRight}>
                            <Image 
                                source={require('../imgs/₹ 1,527.jpg')}
                                style={{ width: 58, height: 16, resizeMode: 'contain' }}
                            />
                            <Image 
                                source={require('../imgs/Including GST (18%).jpg')}
                                style={{ width: 124, height: 14, resizeMode: 'contain', marginTop: 4 }}
                            />
                        </View>
                    </View>

                    <View style={styles.content}>
                        {/* Tabs */}
                        <View style={styles.tabContainer}>
                            <TouchableOpacity 
                                style={[
                                    styles.tabButton, 
                                    activeTab === 'credit' ? styles.activeTab : styles.inactiveTab,
                                    { marginRight: 8 }
                                ]}
                                onPress={() => setActiveTab('credit')}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name="card" size={20} color={activeTab === 'credit' ? "#FFF" : "#000"} />
                                    <Text style={activeTab === 'credit' ? styles.activeTabText : styles.inactiveTabText}>Credit card</Text>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                style={[
                                    styles.tabButton, 
                                    activeTab === 'apple' ? styles.activeTab : styles.inactiveTab,
                                    { marginLeft: 8 }
                                ]}
                                onPress={() => setActiveTab('apple')}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesome name="apple" size={20} color={activeTab === 'apple' ? "#FFF" : "#000"} />
                                    <Text style={activeTab === 'apple' ? styles.activeTabText : styles.inactiveTabText}>Apple Pay</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Form */}
                        <View style={styles.inputSection}>
                            <Image 
                                source={require('../imgs/Card number.jpg')}
                                style={{ width: 98, height: 12, resizeMode: 'contain', marginBottom: 8 }}
                            />
                            <View style={styles.inputContainer}>
                                <Image 
                                    source={require('../imgs/5261 4141 0151 8472.jpg')}
                                    style={{ width: 170, height: 12, resizeMode: 'contain' }}
                                />
                                <View style={styles.cardIcons}>
                                    <Image 
                                        source={require('../imgs/Master Card Logo.jpg')}
                                        style={{ width: 27, height: 16, resizeMode: 'contain', marginLeft: 8 }}
                                    />
                                    <View style={{ width: 22, height: 16, backgroundColor: '#EEE', borderRadius: 2, marginLeft: 8 }} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.inputSection}>
                            <Image 
                                source={require('../imgs/Cardholder name.jpg')}
                                style={{ width: 130, height: 12, resizeMode: 'contain', marginBottom: 8 }}
                            />
                            <View style={styles.inputContainer}>
                                <Image 
                                    source={require('../imgs/Christie Doe.jpg')}
                                    style={{ width: 88, height: 12, resizeMode: 'contain' }}
                                />
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={[styles.inputSection, styles.halfInput]}>
                                <Image 
                                    source={require('../imgs/Expiry date.jpg')}
                                    style={{ width: 84, height: 15, resizeMode: 'contain', marginBottom: 8 }}
                                />
                                <View style={styles.inputContainer}>
                                    <Image 
                                        source={require('../imgs/06/2024.jpg')}
                                        style={{ width: 80, height: 12, resizeMode: 'contain' }}
                                    />
                                </View>
                            </View>

                            <View style={[styles.inputSection, styles.halfInput]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                                    <Image 
                                        source={require('../imgs/CVV/CVC.jpg')}
                                        style={{ width: 80, height: 12, resizeMode: 'contain' }}
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Image 
                                        source={require('../imgs/915.jpg')}
                                        style={{ width: 25, height: 12, resizeMode: 'contain', marginRight: 'auto' }}
                                    />
                                    <Image 
                                        source={require('../imgs/Hint.jpg')}
                                        style={{ width: 18, height: 18, resizeMode: 'contain' }}
                                    />
                                </View>
                            </View>
                        </View>

                        <Image 
                            source={require('../imgs/We will send you an order details to your email after the successfull payment.jpg')}
                            style={{ width: '100%', height: 28, resizeMode: 'contain', marginVertical: 20 }}
                        />

                        {/* Pay Button */}
                        <TouchableOpacity 
                            style={styles.payButton} 
                            onPress={handlePay}
                        >
                            <Ionicons name="lock-closed" size={20} color="#FFF" />
                            <Text style={styles.payButtonText}>Pay for the order</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
