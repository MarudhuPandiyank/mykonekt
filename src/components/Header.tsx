import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import { headerStyles } from '../styles/headerStyles';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface HeaderProps {
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  searchBarTop: Animated.AnimatedInterpolation<number>;
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

/**
 * Header Component
 * Displays delivery time, location, brand tabs, search bar, and category navigation
 */
const Header: React.FC<HeaderProps> = ({
  selectedBrand,
  setSelectedBrand,
  searchBarTop,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <View style={headerStyles.headerSection}>
      {/* Delivery Time and Location */}
      <View style={headerStyles.topBar}>
        <View style={headerStyles.deliveryInfo}>
          <Text style={headerStyles.deliveryTime}>⚡8 minutes</Text>
          <View style={headerStyles.locationContainer}>
            <Text style={headerStyles.locationText}>
              Pg - Bellandur, Bengaluru, Karnataka
            </Text>
            <Text style={headerStyles.dropdownIcon}>▼</Text>
          </View>
        </View>
        <TouchableOpacity style={headerStyles.profileIcon}>
          <Text style={headerStyles.profileIconText}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Brand Buttons */}
      <View style={headerStyles.brandContainer}>
        <TouchableOpacity
          style={[
            headerStyles.brandButton,
            selectedBrand === 'konekt' && headerStyles.brandButtonActive,
          ]}
          onPress={() => setSelectedBrand('konekt')}
        >
          <Text style={headerStyles.brandTextPurple}>konekt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            headerStyles.brandButton,
            selectedBrand === '50off' && headerStyles.brandButtonActive,
          ]}
          onPress={() => setSelectedBrand('50off')}
        >
          <Text style={headerStyles.brandTextBlue}>50%</Text>
          <Text style={headerStyles.brandTextSmall}>OFF ZONE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            headerStyles.brandButton,
            selectedBrand === 'supermall' && headerStyles.brandButtonActive,
          ]}
          onPress={() => setSelectedBrand('supermall')}
        >
          <Text style={headerStyles.brandTextGreen}>Super</Text>
          <Text style={headerStyles.brandTextGreen}>Mall.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            headerStyles.brandButton,
            selectedBrand === 'cafe' && headerStyles.brandButtonActive,
          ]}
          onPress={() => setSelectedBrand('cafe')}
        >
          <Text style={headerStyles.brandTextPurple}>café</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <Animated.View style={[headerStyles.searchContainer, { top: searchBarTop }]}>
        <Text style={headerStyles.searchIcon}>🔍</Text>
        <TextInput
          style={headerStyles.searchInput}
          placeholder='Search for "Iphone"'
          placeholderTextColor="#666"
        />
        <View style={headerStyles.adBanner}>
          <Text style={headerStyles.adText}>WINTER CRAVING 🍪</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Header;
