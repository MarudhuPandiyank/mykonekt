import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import { stickyHeaderStyles } from '../styles/stickyHeaderStyles';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface StickyHeaderProps {
  scrollY: Animated.Value;
  scrollThreshold: number;
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

/**
 * StickyHeader Component
 * Compact header that appears when user scrolls down
 * Contains search bar and simplified category tabs
 */
const StickyHeader: React.FC<StickyHeaderProps> = ({
  scrollY,
  scrollThreshold,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Animated.View
      style={[
        stickyHeaderStyles.stickyHeader,
        {
          opacity: scrollY.interpolate({
            inputRange: [0, scrollThreshold],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
        },
      ]}
    >
      <View style={stickyHeaderStyles.stickySearchContainer}>
        <Text style={stickyHeaderStyles.searchIcon}>🔍</Text>
        <TextInput
          style={stickyHeaderStyles.stickySearchInput}
          placeholder='Search for "The Family Man"'
          placeholderTextColor="#999"
        />
      </View>

      {/* Compact category tabs without images */}
      <View style={stickyHeaderStyles.compactCategoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              stickyHeaderStyles.compactCategoryTab,
              selectedCategory === category.id && stickyHeaderStyles.compactCategoryTabActive,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text
              style={[
                stickyHeaderStyles.compactCategoryText,
                selectedCategory === category.id && stickyHeaderStyles.compactCategoryTextActive,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Animated.View>
  );
};

export default StickyHeader;
