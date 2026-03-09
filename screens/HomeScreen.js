import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import styles from './styles/homeStyles';

const insightCards = [
    {
        id: 'scan',
        icon: '📋',
        label: 'Scan new',
        subtitle: 'Scanned 483',
        bgColor: '#EDE7F6',
        iconBg: '#D1C4E9',
        navigateTo: 'Scan',
    },
    {
        id: 'counterfeits',
        icon: '⚠️',
        label: 'Counterfeits',
        subtitle: 'Counterfeited 32',
        bgColor: '#FBE9E7',
        iconBg: '#FFCCBC',
        navigateTo: null,
    },
    {
        id: 'success',
        icon: '✅',
        label: 'Success',
        subtitle: 'Checkouts 8',
        bgColor: '#E0F2F1',
        iconBg: '#B2DFDB',
        navigateTo: null,
    },
    {
        id: 'directory',
        icon: '📅',
        label: 'Directory',
        subtitle: 'History 26',
        bgColor: '#E1F5FE',
        iconBg: '#B3E5FC',
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
                            <Text style={styles.iconText}>{card.icon}</Text>
                        </View>
                        <Text style={styles.cardLabel}>{card.label}</Text>
                        <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
}
