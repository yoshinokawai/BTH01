import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import styles from './styles/homeStyles';

const insightCards = [
    {
        id: 'scan',
        icon: <Ionicons name="scan-outline" size={28} color="#5B6AF0" />,
        label: 'Scan new',
        subtitle: 'Scanned 483',
        bgColor: '#F6F6FD', // Updated background color based on image
        iconBg: '#E8E8FD',
        navigateTo: 'Scan',
    },
    {
        id: 'counterfeits',
        icon: <Ionicons name="warning" size={28} color="#FF6E40" />,
        label: 'Counterfeits',
        subtitle: 'Counterfeited 32',
        bgColor: '#FEF4F1',
        iconBg: '#FCE7DF',
        navigateTo: null,
    },
    {
        id: 'success',
        icon: <Ionicons name="checkmark-circle" size={28} color="#26A69A" />,
        label: 'Success',
        subtitle: 'Checkouts 8',
        bgColor: '#F0F9F8',
        iconBg: '#DFF2EF',
        navigateTo: 'Success',
    },
    {
        id: 'directory',
        icon: <Ionicons name="calendar-outline" size={28} color="#29B6F6" />,
        label: 'Directory',
        subtitle: 'History 26',
        bgColor: '#F2FAFF',
        iconBg: '#DEF3FF',
        navigateTo: null,
    },
];

export default function HomeScreen({ navigation }) {
    const handleCardPress = (card) => {
        if (card.navigateTo) {
            navigation.navigate(card.navigateTo);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.greeting}>Hello 👋</Text>
                    <Text style={styles.userName}>Christie Doe</Text>
                </View>
                <Image
                    source={require('../assets/avatar.png')}
                    style={styles.avatar}
                />
            </View>

            {/* Insights Section */}
            <Text style={styles.sectionTitle}>Your Insights</Text>

            {/* Cards Grid */}
            <View style={styles.grid}>
                {insightCards.map((card) => (
                    <TouchableOpacity
                        key={card.id}
                        style={[styles.card, { backgroundColor: card.bgColor }]}
                        onPress={() => handleCardPress(card)}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.iconContainer, { backgroundColor: card.iconBg }]}>
                            {card.icon}
                        </View>
                        <Text style={styles.cardLabel}>{card.label}</Text>
                        <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
}
