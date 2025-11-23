import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  SafeAreaView,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 44 : RNStatusBar.currentHeight || 0;
const isSmallDevice = width < 375;
const isMediumDevice = width >= 375 && width < 414;
const isLargeDevice = width >= 414;

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('zepto');
  const scrollY = useRef(new Animated.Value(0)).current;

  // Threshold for when to switch to compact mode
  const SCROLL_THRESHOLD = 200;

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

  return (
    <View style={styles.container}>
      <StatusBar style="dark" translucent={false} backgroundColor="#E8D5F2" />

      {/* Fixed Header - Shows when scrolled */}
      <Animated.View
        style={[
          styles.stickyHeader,
          {
            opacity: scrollY.interpolate({
              inputRange: [0, SCROLL_THRESHOLD],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          },
        ]}
      >
        <View style={styles.stickySearchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.stickySearchInput}
            placeholder='Search for "The Family Man"'
            placeholderTextColor="#999"
          />
        </View>

        {/* Compact category tabs without images */}
        <View style={styles.compactCategoryContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.compactCategoryTab,
                selectedCategory === category.id && styles.compactCategoryTabActive,
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Text
                style={[
                  styles.compactCategoryText,
                  selectedCategory === category.id && styles.compactCategoryTextActive,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        style={styles.scrollView}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {/* Collapsible Header Section */}
        <Animated.View
          style={[
            styles.headerSection,
            {
              opacity: headerOpacity,
              height: headerHeight,
            },
          ]}
        >
          {/* Delivery Time and Location */}
          <View style={styles.topBar}>
            <View style={styles.deliveryInfo}>
              <Text style={styles.deliveryTime}>⚡8 minutes</Text>
              <View style={styles.locationContainer}>
                <Text style={styles.locationText}>
                  Pg - Bellandur, Bengaluru, Karnataka
                </Text>
                <Text style={styles.dropdownIcon}>▼</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.profileIcon}>
              <Text style={styles.profileIconText}>👤</Text>
            </TouchableOpacity>
          </View>

          {/* Brand Buttons */}
          <View style={styles.brandContainer}>
            <TouchableOpacity
              style={[
                styles.brandButton,
                selectedBrand === 'zepto' && styles.brandButtonActive,
              ]}
              onPress={() => setSelectedBrand('zepto')}
            >
              <Text style={styles.brandTextPurple}>zepto</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.brandButton,
                selectedBrand === '50off' && styles.brandButtonActive,
              ]}
              onPress={() => setSelectedBrand('50off')}
            >
              <Text style={styles.brandTextBlue}>50%</Text>
              <Text style={styles.brandTextSmall}>OFF ZONE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.brandButton,
                selectedBrand === 'supermall' && styles.brandButtonActive,
              ]}
              onPress={() => setSelectedBrand('supermall')}
            >
              <Text style={styles.brandTextGreen}>Super</Text>
              <Text style={styles.brandTextGreen}>Mall.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.brandButton,
                selectedBrand === 'cafe' && styles.brandButtonActive,
              ]}
              onPress={() => setSelectedBrand('cafe')}
            >
              <Text style={styles.brandTextPurple}>café</Text>
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <Animated.View style={[styles.searchContainer, { top: searchBarTop }]}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder='Search for "Iphone"'
              placeholderTextColor="#666"
            />
            <View style={styles.adBanner}>
              <Text style={styles.adText}>WINTER CRAVING 🍪</Text>
            </View>
          </Animated.View>

          {/* Category Tabs with Images */}
          <View style={styles.categoryContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryItem}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category.id && styles.categoryTextActive,
                  ]}
                >
                  {category.name}
                </Text>
                {selectedCategory === category.id && (
                  <View style={styles.categoryUnderline} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Promotional Banners */}
          <View style={styles.promoBanner}>
            <View style={styles.promoLeft}>
              <Text style={styles.promoIcon}>🛍️</Text>
              <Text style={styles.promoTextLarge}>₹0 FEES</Text>
            </View>
            <View style={styles.promoRight}>
              <Text style={styles.promoIcon}>💰</Text>
              <Text style={styles.promoTextBold}>EVERYDAY</Text>
              <Text style={styles.promoTextPurple}>LOWEST PRICES*</Text>
            </View>
          </View>

          {/* Free Delivery Benefits */}
          <View style={styles.benefitsContainer}>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>✓</Text>
              <Text style={styles.benefitText}>₹0 Handling Fee</Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>✓</Text>
              <Text style={styles.benefitText}>₹0 Delivery Fee*</Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>✓</Text>
              <Text style={styles.benefitText}>₹0 Rain & Surge Fee</Text>
            </View>
          </View>

          {/* Offer Cards */}
          <View style={styles.offerContainer}>
            <View style={styles.offerCard}>
              <Text style={styles.offerAmount}>₹50 off</Text>
              <Text style={styles.offerCondition}>on ₹799 & above</Text>
            </View>
            <View style={styles.offerCard}>
              <Text style={styles.offerAmount}>₹150 off</Text>
              <Text style={styles.offerCondition}>on ₹1999 & above</Text>
            </View>
            <View style={styles.offerCard}>
              <Text style={styles.offerAmount}>₹200 off</Text>
              <Text style={styles.offerCondition}>on ₹2599 & above</Text>
            </View>
          </View>

          {/* Fresh Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Fresh at ₹9</Text>
          </View>
          <Text style={styles.sectionSubtitle}>Fruits & Veggies</Text>

          {/* Category Icons - Horizontal Scroll */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.freshCategoryScroll}
            contentContainerStyle={styles.freshCategoryContainer}
          >
            <TouchableOpacity style={styles.freshCategoryItem}>
              <View style={styles.freshCategoryIconBg}>
                <Text style={styles.freshCategoryIcon}>₹9</Text>
              </View>
              <Text style={styles.freshCategoryText}>₹9 Zone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.freshCategoryItem}>
              <View style={styles.freshCategoryIconCircle}>
                <Text style={styles.freshIcon}>🥬</Text>
              </View>
              <Text style={styles.freshCategoryText}>Veggies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.freshCategoryItem}>
              <View style={styles.freshCategoryIconCircle}>
                <Text style={styles.freshIcon}>🍊</Text>
              </View>
              <Text style={styles.freshCategoryText}>Fruits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.freshCategoryItem}>
              <View style={styles.freshCategoryIconCircle}>
                <Text style={styles.freshIcon}>🥝</Text>
              </View>
              <Text style={styles.freshCategoryText}>Exotics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.freshCategoryItem}>
              <View style={styles.freshCategoryIconCircle}>
                <Text style={styles.freshIcon}>🥕</Text>
              </View>
              <Text style={styles.freshCategoryText}>Roots</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.freshCategoryItem}>
              <View style={styles.freshCategoryIconCircle}>
                <Text style={styles.freshIcon}>🌿</Text>
              </View>
              <Text style={styles.freshCategoryText}>Herbs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.freshCategoryItem}>
              <View style={styles.freshCategoryIconCircle}>
                <Text style={styles.freshIcon}>🥒</Text>
              </View>
              <Text style={styles.freshCategoryText}>Organic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.freshCategoryItem}>
              <View style={styles.freshCategoryIconCircle}>
                <Text style={styles.freshIcon}>🍇</Text>
              </View>
              <Text style={styles.freshCategoryText}>Berries</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.freshCategoryItem}>
              <View style={styles.freshCategoryIconCircle}>
                <Text style={styles.freshIcon}>🥑</Text>
              </View>
              <Text style={styles.freshCategoryText}>Seasonal</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Product Grid - Horizontal Scroll */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.productScroll}
            contentContainerStyle={styles.productScrollContent}
          >
            {products.map((product) => (
              <View key={product.id} style={styles.productCard}>
                <TouchableOpacity style={styles.favoriteButton}>
                  <Text style={styles.favoriteIcon}>♡</Text>
                </TouchableOpacity>
                <Text style={styles.productImage}>{product.image}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.badge}>₹9</Text>
                  <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
                </View>
                <Text style={styles.discount}>{product.discount}</Text>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productWeight}>{product.weight}</Text>
                <View style={styles.deliveryRow}>
                  <Text style={styles.deliveryIcon}>⚡</Text>
                  <Text style={styles.deliveryText}>{product.deliveryTime}</Text>
                </View>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>ADD</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          {/* See All Button */}
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See all ›</Text>
          </TouchableOpacity>

          {/* Extra content for scrolling */}
          <View style={styles.extraContent}>
            <View style={styles.bannerPlaceholder}>
              <Text style={styles.bannerText}>🎉 More offers below</Text>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D5F2',
    paddingTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
  },
  stickyHeader: {
    position: 'absolute',
    top: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
    left: 0,
    right: 0,
    backgroundColor: '#E8D5F2',
    zIndex: 1000,
    paddingTop: isSmallDevice ? 8 : 10,
    paddingHorizontal: isSmallDevice ? 12 : 16,
  },
  stickySearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: isSmallDevice ? 10 : 12,
    paddingHorizontal: isSmallDevice ? 10 : 12,
    paddingVertical: isSmallDevice ? 8 : 10,
    marginBottom: isSmallDevice ? 10 : 12,
  },
  stickySearchInput: {
    flex: 1,
    fontSize: isSmallDevice ? 13 : 15,
    color: '#333',
    marginLeft: 8,
  },
  compactCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#E8D5F2',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#D0B5E0',
  },
  compactCategoryTab: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  compactCategoryTabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  },
  compactCategoryText: {
    fontSize: isSmallDevice ? 11 : 13,
    color: '#666',
    fontWeight: '500',
  },
  compactCategoryTextActive: {
    color: '#333',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  headerSection: {
    backgroundColor: '#E8D5F2',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: isSmallDevice ? 12 : 16,
    paddingTop: isSmallDevice ? 8 : 10,
    paddingBottom: isSmallDevice ? 10 : 12,
  },
  deliveryInfo: {
    flex: 1,
  },
  deliveryTime: {
    fontSize: isSmallDevice ? 20 : isMediumDevice ? 22 : 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: isSmallDevice ? 11 : 13,
    color: '#555',
    marginRight: 4,
    flexShrink: 1,
  },
  dropdownIcon: {
    fontSize: 10,
    color: '#555',
  },
  profileIcon: {
    width: isSmallDevice ? 36 : 40,
    height: isSmallDevice ? 36 : 40,
    borderRadius: isSmallDevice ? 18 : 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIconText: {
    fontSize: 20,
  },
  brandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: isSmallDevice ? 12 : 16,
    marginBottom: isSmallDevice ? 12 : 16,
    gap: isSmallDevice ? 6 : 10,
  },
  brandButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: isSmallDevice ? 10 : 12,
    paddingVertical: isSmallDevice ? 10 : 12,
    paddingHorizontal: isSmallDevice ? 4 : 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: isSmallDevice ? 45 : 50,
  },
  brandButtonActive: {
    backgroundColor: '#F0E6FF',
    borderWidth: 2,
    borderColor: '#8B4FB5',
  },
  brandTextPurple: {
    fontSize: isSmallDevice ? 12 : 14,
    fontWeight: '700',
    color: '#8B4FB5',
  },
  brandTextBlue: {
    fontSize: isSmallDevice ? 14 : 16,
    fontWeight: '700',
    color: '#4169E1',
  },
  brandTextGreen: {
    fontSize: isSmallDevice ? 11 : 13,
    fontWeight: '700',
    color: '#228B22',
  },
  brandTextSmall: {
    fontSize: isSmallDevice ? 9 : 10,
    fontWeight: '600',
    color: '#4169E1',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: isSmallDevice ? 10 : 12,
    paddingHorizontal: isSmallDevice ? 10 : 12,
    paddingVertical: isSmallDevice ? 8 : 10,
    marginHorizontal: isSmallDevice ? 12 : 16,
    marginBottom: isSmallDevice ? 12 : 16,
    position: 'relative',
  },
  searchIcon: {
    fontSize: isSmallDevice ? 16 : 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: isSmallDevice ? 13 : 15,
    color: '#333',
  },
  adBanner: {
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  adText: {
    fontSize: isSmallDevice ? 10 : 11,
    fontWeight: '600',
    color: '#FF8C00',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: isSmallDevice ? 8 : 16,
    paddingBottom: isSmallDevice ? 10 : 12,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: isSmallDevice ? 28 : 32,
    marginBottom: 4,
  },
  categoryText: {
    fontSize: isSmallDevice ? 11 : 13,
    color: '#555',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: '#333',
    fontWeight: '600',
  },
  categoryUnderline: {
    width: '100%',
    height: 2,
    backgroundColor: '#333',
    marginTop: 4,
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    marginTop: -10,
  },
  promoBanner: {
    flexDirection: 'row',
    marginHorizontal: isSmallDevice ? 12 : 16,
    marginBottom: isSmallDevice ? 12 : 16,
    backgroundColor: '#F8F8F8',
    borderRadius: isSmallDevice ? 10 : 12,
    padding: isSmallDevice ? 12 : 16,
    gap: isSmallDevice ? 8 : 12,
  },
  promoLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  promoRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  promoIcon: {
    fontSize: isSmallDevice ? 20 : 24,
  },
  promoTextLarge: {
    fontSize: isSmallDevice ? 16 : 18,
    fontWeight: '700',
    color: '#8B4FB5',
  },
  promoTextBold: {
    fontSize: isSmallDevice ? 11 : 13,
    fontWeight: '700',
    color: '#333',
  },
  promoTextPurple: {
    fontSize: isSmallDevice ? 11 : 13,
    fontWeight: '700',
    color: '#8B4FB5',
  },
  benefitsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: isSmallDevice ? 12 : 16,
    marginBottom: isSmallDevice ? 12 : 16,
    gap: isSmallDevice ? 4 : 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  benefitIcon: {
    fontSize: 14,
    color: '#4CAF50',
  },
  benefitText: {
    fontSize: isSmallDevice ? 9 : 11,
    color: '#8B4FB5',
    fontWeight: '500',
  },
  offerContainer: {
    flexDirection: 'row',
    paddingHorizontal: isSmallDevice ? 12 : 16,
    marginBottom: isSmallDevice ? 16 : 20,
    gap: isSmallDevice ? 6 : 10,
  },
  offerCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderRadius: isSmallDevice ? 10 : 12,
    padding: isSmallDevice ? 10 : 12,
    alignItems: 'center',
  },
  offerAmount: {
    fontSize: isSmallDevice ? 14 : 16,
    fontWeight: '700',
    color: '#8B4FB5',
    marginBottom: 4,
  },
  offerCondition: {
    fontSize: isSmallDevice ? 10 : 11,
    color: '#666',
  },
  sectionHeader: {
    paddingHorizontal: isSmallDevice ? 12 : 16,
    marginBottom: isSmallDevice ? 6 : 8,
  },
  sectionTitle: {
    fontSize: isSmallDevice ? 20 : isMediumDevice ? 22 : 24,
    fontWeight: '700',
    color: '#228B22',
  },
  sectionSubtitle: {
    fontSize: isSmallDevice ? 14 : 16,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: isSmallDevice ? 12 : 16,
    marginBottom: isSmallDevice ? 12 : 16,
  },
  freshCategoryScroll: {
    marginBottom: isSmallDevice ? 16 : 20,
  },
  freshCategoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: isSmallDevice ? 12 : 16,
    gap: isSmallDevice ? 8 : 12,
    paddingRight: isSmallDevice ? 24 : 32,
  },
  freshCategoryItem: {
    alignItems: 'center',
    gap: 8,
  },
  freshCategoryIconBg: {
    width: isSmallDevice ? 50 : 60,
    height: isSmallDevice ? 50 : 60,
    borderRadius: isSmallDevice ? 25 : 30,
    backgroundColor: '#FF1493',
    alignItems: 'center',
    justifyContent: 'center',
  },
  freshCategoryIcon: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  freshCategoryIconCircle: {
    width: isSmallDevice ? 50 : 60,
    height: isSmallDevice ? 50 : 60,
    borderRadius: isSmallDevice ? 25 : 30,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  freshIcon: {
    fontSize: isSmallDevice ? 24 : 28,
  },
  freshCategoryText: {
    fontSize: isSmallDevice ? 10 : 12,
    color: '#333',
    fontWeight: '500',
  },
  productScroll: {
    marginBottom: isSmallDevice ? 16 : 20,
  },
  productScrollContent: {
    paddingHorizontal: isSmallDevice ? 12 : 16,
    gap: isSmallDevice ? 10 : 12,
    paddingRight: isSmallDevice ? 24 : 32,
  },
  productCard: {
    width: isSmallDevice ? width * 0.42 : width * 0.45,
    backgroundColor: '#fff',
    borderRadius: isSmallDevice ? 10 : 12,
    padding: isSmallDevice ? 10 : 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    position: 'relative',
    marginRight: isSmallDevice ? 10 : 12,
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  favoriteIcon: {
    fontSize: 18,
    color: '#FF1493',
  },
  productImage: {
    fontSize: isSmallDevice ? 60 : isMediumDevice ? 70 : 80,
    textAlign: 'center',
    marginVertical: isSmallDevice ? 8 : 12,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  badge: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  originalPrice: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  discount: {
    fontSize: 11,
    color: '#4CAF50',
    fontWeight: '600',
    marginBottom: 6,
  },
  productName: {
    fontSize: isSmallDevice ? 12 : 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  productWeight: {
    fontSize: isSmallDevice ? 10 : 11,
    color: '#666',
    marginBottom: 6,
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  deliveryIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  deliveryText: {
    fontSize: 11,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#FF1493',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FF1493',
  },
  seeAllButton: {
    backgroundColor: '#FFE6F0',
    marginHorizontal: isSmallDevice ? 12 : 16,
    marginTop: isSmallDevice ? 12 : 16,
    marginBottom: isSmallDevice ? 16 : 20,
    paddingVertical: isSmallDevice ? 12 : 14,
    borderRadius: isSmallDevice ? 10 : 12,
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: isSmallDevice ? 13 : 15,
    fontWeight: '600',
    color: '#FF1493',
  },
  extraContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  bannerPlaceholder: {
    backgroundColor: '#F0F8FF',
    padding: 40,
    borderRadius: 12,
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 16,
    color: '#666',
  },
});
