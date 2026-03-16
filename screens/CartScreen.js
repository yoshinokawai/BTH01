import React from 'react';
import { View, Image, FlatList, TouchableOpacity, SafeAreaView, StatusBar, Text } from 'react-native';
import styles from './styles/cartStyles';

const mockItems = [
  {
    id: '1',
    brand: "Lauren's",
    name: 'Orange Juice',
    price: 149,
    qty: 1,
    thumbnail: require('../imgs/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.jpg'),
  },
  {
    id: '2',
    brand: "Baskin's",
    name: 'Skimmed Milk',
    price: 129,
    qty: 1,
    thumbnail: null,
  },
  {
    id: '3',
    brand: "Marley's",
    name: 'Aloe Vera Lotion',
    price: 1249,
    qty: 1,
    thumbnail: null,
  },
];

export default function CartScreen({ navigation }) {
  const total = mockItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      {item.thumbnail ? (
        <Image source={item.thumbnail} style={styles.itemImage} resizeMode="cover" />
      ) : (
        <View style={styles.placeholderThumb}>
          <Image source={require('../imgs/Vector.jpg')} style={styles.placeholderIcon} resizeMode="contain" />
        </View>
      )}
      <View style={styles.itemInfo}>
        <Text style={styles.brandText}>{item.brand}</Text>
        <Text style={styles.itemNameText}>{item.name}</Text>
        <Text style={styles.itemQty}>Qty: {item.qty}</Text>
      </View>
      <View style={styles.priceRight}>
        <Text style={styles.itemPriceText}>₹ {item.price * item.qty}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backButton}>
            <Image source={require('../imgs/Arrow 1-2.jpg')} style={styles.backIcon} resizeMode="contain" />
          </View>
        </TouchableOpacity>
        <View style={styles.headerTitleWrap}>
          <Text style={styles.headerTitle}>Your Cart 👍🏻</Text>
        </View>
        <View style={{ width: 44 }} />
      </View>

      <FlatList
        data={mockItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>₹ {total}</Text>
        </View>

        <TouchableOpacity
          style={styles.checkoutButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Payment')}
        >
          <Text style={styles.checkoutText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

