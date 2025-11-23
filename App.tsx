import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { commonStyles } from './src/styles/common';
import StickyHeader from './src/components/StickyHeader';
import Header from './src/components/Header';
import CategoryTabs from './src/components/CategoryTabs';
import PromoBanner from './src/components/PromoBanner';
import FreshSection from './src/components/FreshSection';
import FreshScreen from './src/screens/FreshScreen';
import SettingsScreen from './src/screens/SettingsScreen';

// Constants
const SCROLL_THRESHOLD = 200;

// Data
const categories = [
  { id: 'All', name: 'All', icon: '🎁' },
  { id: 'Fresh', name: 'Fresh', icon: '🍎' },
  { id: 'Winter Store', name: 'Winter Store', icon: '🧥' },
  { id: 'Beauty', name: 'Beauty', icon: '💄' },
  { id: 'Home', name: 'Home', icon: '🏠' },
];

const products = [
  {
    id: 1,
    name: 'Onion',
    weight: '(450-500 g)',
    price: 9,
    originalPrice: 31,
    discount: '₹22 OFF',
    deliveryTime: '8 mins',
    image: '🧅',
  },
  {
    id: 2,
    name: 'Potato',
    weight: '(450-500 g)',
    price: 9,
    originalPrice: 29,
    discount: '₹20 OFF',
    deliveryTime: '8 mins',
    image: '🥔',
  },
  {
    id: 3,
    name: 'Tomato Local',
    weight: '250 g',
    price: 9,
    originalPrice: 37,
    discount: '₹28 OFF',
    deliveryTime: '8 mins',
    image: '🍅',
  },
  {
    id: 4,
    name: 'Carrot',
    weight: '(500 g)',
    price: 9,
    originalPrice: 25,
    discount: '₹16 OFF',
    deliveryTime: '8 mins',
    image: '🥕',
  },
  {
    id: 5,
    name: 'Capsicum',
    weight: '(250 g)',
    price: 9,
    originalPrice: 32,
    discount: '₹23 OFF',
    deliveryTime: '8 mins',
    image: '🫑',
  },
  {
    id: 6,
    name: 'Cucumber',
    weight: '(500 g)',
    price: 9,
    originalPrice: 28,
    discount: '₹19 OFF',
    deliveryTime: '8 mins',
    image: '🥒',
  },
  {
    id: 7,
    name: 'Brinjal',
    weight: '(450-500 g)',
    price: 9,
    originalPrice: 30,
    discount: '₹21 OFF',
    deliveryTime: '8 mins',
    image: '🍆',
  },
  {
    id: 8,
    name: 'Cauliflower',
    weight: '(1 pc)',
    price: 9,
    originalPrice: 35,
    discount: '₹26 OFF',
    deliveryTime: '8 mins',
    image: '🥦',
  },
  {
    id: 9,
    name: 'Green Chilli',
    weight: '(100 g)',
    price: 9,
    originalPrice: 24,
    discount: '₹15 OFF',
    deliveryTime: '8 mins',
    image: '🌶️',
  },
  {
    id: 10,
    name: 'Coriander',
    weight: '(100 g)',
    price: 9,
    originalPrice: 22,
    discount: '₹13 OFF',
    deliveryTime: '8 mins',
    image: '🌿',
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('konekt');
  const [showSettings, setShowSettings] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  // Animated values for header elements
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, SCROLL_THRESHOLD],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const headerHeight = scrollY.interpolate({
    inputRange: [0, SCROLL_THRESHOLD],
    outputRange: [320, 0],
    extrapolate: 'clamp',
  });

  const searchBarTop = scrollY.interpolate({
    inputRange: [0, SCROLL_THRESHOLD],
    outputRange: [0, -200],
    extrapolate: 'clamp',
  });

  // If settings screen is active, show it
  if (showSettings) {
    return (
      <View style={commonStyles.container}>
        <StatusBar style="dark" translucent={false} backgroundColor="#FFFFFF" />
        <SettingsScreen onBack={() => setShowSettings(false)} />
      </View>
    );
  }

  return (
    <View style={commonStyles.container}>
      <StatusBar style="dark" translucent={false} backgroundColor="#E8D5F2" />

      {/* Fixed Sticky Header - Shows when scrolled */}
      <StickyHeader
        scrollY={scrollY}
        scrollThreshold={SCROLL_THRESHOLD}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onProfilePress={() => setShowSettings(true)}
      />

      {/* Scrollable Content */}
      <Animated.ScrollView
        style={commonStyles.scrollView}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {/* Collapsible Header Section */}
        <Animated.View
          style={{
            opacity: headerOpacity,
            height: headerHeight,
          }}
        >
          <Header
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            searchBarTop={searchBarTop}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onProfilePress={() => setShowSettings(true)}
          />

          {/* Category Tabs with Images */}
          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Animated.View>

        {/* Main Content */}
        <View style={commonStyles.content}>
          {selectedCategory === 'Fresh' ? (
            /* Fresh Screen with dedicated layout */
            <FreshScreen scrollY={scrollY} />
          ) : (
            <>
              {/* Promotional Banners and Offers */}
              <PromoBanner />

              {/* Fresh Products Section */}
              <FreshSection products={products} />

              {/* Extra content placeholder */}
              <View style={{ paddingHorizontal: 16, paddingBottom: 100 }}>
                <View
                  style={{
                    backgroundColor: '#F0F8FF',
                    padding: 40,
                    borderRadius: 12,
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ fontSize: 16, color: '#666' }}>🎉 More offers below</Text>
                </View>
              </View>
            </>
          )}
        </View>
      </Animated.ScrollView>
    </View>
  );
}
