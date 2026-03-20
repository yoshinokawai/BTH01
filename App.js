import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import CartScreen from './screens/CartScreen';
import PaymentScreen from './screens/PaymentScreen';
import SuccessScreen from './screens/SuccessScreen';
import NotificationScreen from './screens/NotificationScreen';
import HistoryScreen from './screens/HistoryScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, name, routeName }) => {
  let activeBg = '#E8E8FD';
  let activeColor = '#5B6AF0';
  
  if (routeName === 'Cart') {
    activeBg = '#FCE7DF';
    activeColor = '#FF8A65';
  } else if (routeName === 'Notification') {
    activeBg = '#FCE7DF';
    activeColor = '#FF6E40';
  } else if (routeName === 'History') {
    activeBg = '#DEF3FF';
    activeColor = '#29B6F6';
  } else if (routeName === 'Scan') {
    activeBg = '#E8E8FD';
    activeColor = '#5B6AF0';
  }

  return (
    <View style={[styles.iconContainer, focused && { backgroundColor: activeBg }]}>
       <Ionicons name={name} size={24} color={focused ? activeColor : '#BDBDBD'} />
       {routeName === 'Notification' && !focused && (
           <View style={styles.badge} />
       )}
    </View>
  );
};

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          let iconName = 'home-outline';
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Notification') iconName = focused ? 'notifications' : 'notifications-outline';
          else if (route.name === 'Scan') iconName = focused ? 'scan' : 'scan-outline';
          else if (route.name === 'History') iconName = focused ? 'time' : 'time-outline';
          else if (route.name === 'Cart') iconName = focused ? 'cart' : 'cart-outline';

          return <TabBarIcon focused={focused} name={iconName} routeName={route.name} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{
            animation: 'fade',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    borderTopWidth: 0,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    paddingHorizontal: 16,
    // Add bottom padding for precise centering of icons on tabs without labels
    paddingBottom: 0,
  },
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 12,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF6E40',
  }
});
