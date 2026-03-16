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
                            <Text style={styles.headerTitle}>Checkout 💳</Text>
                        </View>
                        
                        <View style={styles.headerRight}>
                            <Text style={styles.totalAmount}>₹ 1,527</Text>
                            <Text style={styles.gstText}>Including GST (18%)</Text>
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
                            <Text style={styles.inputLabel}>Card number</Text>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputValue}>5261 4141 0151 8472</Text>
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
                            <Text style={styles.inputLabel}>Cardholder name</Text>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputValue}>Christie Doe</Text>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={[styles.inputSection, styles.halfInput]}>
                                <Text style={styles.inputLabel}>Expiry date</Text>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.inputValue}>06  /  2024</Text>
                                </View>
                            </View>

                            <View style={[styles.inputSection, styles.halfInput]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                                    <Text style={styles.inputLabel}>CVV / CVC</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    <Text style={[styles.inputValue, { marginRight: 'auto' }]}>915</Text>
                                    <Image 
                                        source={require('../imgs/Hint.jpg')}
                                        style={{ width: 18, height: 18, resizeMode: 'contain' }}
                                    />
                                </View>
                            </View>
                        </View>

                        <Text style={styles.infoText}>
                            We will send you an order details to your email after the successfull payment
                        </Text>

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
