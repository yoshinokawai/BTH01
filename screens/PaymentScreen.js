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

    // Input States
    const [cardNumber, setCardNumber] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    // Error States
    const [errors, setErrors] = useState({});

    // Formatting & Validation functions
    const formatCardNumber = (text) => {
        let cleaned = text.replace(/\D/g, ''); // Remove non-digits
        // Add space every 4 digits
        let formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
        formatted = formatted.substring(0, 19);
        setCardNumber(formatted);
        
        if (cleaned.length > 0 && cleaned.length < 16) {
            setErrors(prev => ({ ...prev, cardNumber: 'Card number must be 16 digits' }));
        } else {
            setErrors(prev => ({ ...prev, cardNumber: null }));
        }
    };

    const formatExpiryDate = (text) => {
        let cleaned = text.replace(/\D/g, '');
        let formatted = cleaned;
        if (cleaned.length >= 2) {
            formatted = cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
        }
        setExpiryDate(formatted);

        if (cleaned.length > 0) {
            if (cleaned.length < 4) {
                 setErrors(prev => ({ ...prev, expiryDate: 'Incomplete date format' }));
            } else {
                 const month = parseInt(cleaned.substring(0, 2), 10);
                 if (month < 1 || month > 12) {
                     setErrors(prev => ({ ...prev, expiryDate: 'Invalid month' }));
                 } else {
                     setErrors(prev => ({ ...prev, expiryDate: null }));
                 }
            }
        } else {
             setErrors(prev => ({ ...prev, expiryDate: null }));
        }
    };

    const formatCvv = (text) => {
        let cleaned = text.replace(/\D/g, '').substring(0, 4); // some cards have 4 digits
        setCvv(cleaned);
        if (cleaned.length > 0 && cleaned.length < 3) {
            setErrors(prev => ({ ...prev, cvv: 'CVV must be 3 or 4 digits' }));
        } else {
            setErrors(prev => ({ ...prev, cvv: null }));
        }
    };
    
    const handleNameChange = (text) => {
        setCardholderName(text);
        if (text.length > 0 && text.trim().length === 0) {
            setErrors(prev => ({ ...prev, cardholderName: 'Name is required' }));
        } else {
            setErrors(prev => ({ ...prev, cardholderName: null }));
        }
    };

    const handlePay = () => {
        // Final validation check before proceeding
        let hasError = false;
        let newErrors = {};

        if (cardNumber.replace(/\D/g, '').length !== 16) {
             newErrors.cardNumber = 'Card number must be 16 digits';
             hasError = true;
        }
        if (!cardholderName.trim()) {
             newErrors.cardholderName = 'Name is required';
             hasError = true;
        }
        if (expiryDate.replace(/\D/g, '').length !== 4) {
             newErrors.expiryDate = 'Complete expiry date is required';
             hasError = true;
        }
        if (cvv.length < 3) {
             newErrors.cvv = 'CVV is required';
             hasError = true;
        }

        if (hasError) {
             setErrors(newErrors);
             return;
        }

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
                            <View style={[styles.inputContainer, errors.cardNumber && styles.inputErrorContainer]}>
                                <TextInput 
                                    style={styles.input}
                                    placeholder="0000 0000 0000 0000"
                                    placeholderTextColor="#9CA3AF"
                                    keyboardType="numeric"
                                    value={cardNumber}
                                    onChangeText={formatCardNumber}
                                    maxLength={19}
                                />
                                <View style={styles.cardIcons}>
                                    <Image 
                                        source={require('../imgs/Master Card Logo.jpg')}
                                        style={{ width: 27, height: 16, resizeMode: 'contain', marginLeft: 8 }}
                                    />
                                    <View style={{ width: 22, height: 16, backgroundColor: '#EEE', borderRadius: 2, marginLeft: 8 }} />
                                </View>
                            </View>
                            {errors.cardNumber && <Text style={styles.errorText}>{errors.cardNumber}</Text>}
                        </View>

                        <View style={styles.inputSection}>
                            <Text style={styles.inputLabel}>Cardholder name</Text>
                            <View style={[styles.inputContainer, errors.cardholderName && styles.inputErrorContainer]}>
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Name on card"
                                    placeholderTextColor="#9CA3AF"
                                    value={cardholderName}
                                    onChangeText={handleNameChange}
                                    autoCapitalize="words"
                                />
                            </View>
                            {errors.cardholderName && <Text style={styles.errorText}>{errors.cardholderName}</Text>}
                        </View>

                        <View style={styles.row}>
                            <View style={[styles.inputSection, styles.halfInput]}>
                                <Text style={styles.inputLabel}>Expiry date</Text>
                                <View style={[styles.inputContainer, errors.expiryDate && styles.inputErrorContainer]}>
                                    <TextInput 
                                        style={styles.input}
                                        placeholder="MM/YY"
                                        placeholderTextColor="#9CA3AF"
                                        keyboardType="numeric"
                                        value={expiryDate}
                                        onChangeText={formatExpiryDate}
                                        maxLength={5}
                                    />
                                </View>
                                {errors.expiryDate && <Text style={styles.errorText}>{errors.expiryDate}</Text>}
                            </View>

                            <View style={[styles.inputSection, styles.halfInput]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                                    <Text style={[styles.inputLabel, { marginBottom: 0 }]}>CVV / CVC</Text>
                                </View>
                                <View style={[styles.inputContainer, errors.cvv && styles.inputErrorContainer]}>
                                    <TextInput 
                                        style={[styles.input, { flex: 1 }]}
                                        placeholder="123"
                                        placeholderTextColor="#9CA3AF"
                                        keyboardType="numeric"
                                        secureTextEntry
                                        value={cvv}
                                        onChangeText={formatCvv}
                                        maxLength={4}
                                    />
                                    <Image 
                                        source={require('../imgs/Hint.jpg')}
                                        style={{ width: 18, height: 18, resizeMode: 'contain' }}
                                    />
                                </View>
                                {errors.cvv && <Text style={styles.errorText}>{errors.cvv}</Text>}
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
