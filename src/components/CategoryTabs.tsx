import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { categoryStyles } from '../styles/categoryStyles';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategoryTabsProps {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

/**
 * CategoryTabs Component
 * Displays category icons with labels for navigation
 * Shows underline for active category
 */
const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <View style={categoryStyles.categoryContainer}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={categoryStyles.categoryItem}
          onPress={() => setSelectedCategory(category.id)}
        >
          <Text style={categoryStyles.categoryIcon}>{category.icon}</Text>
          <Text
            style={[
              categoryStyles.categoryText,
              selectedCategory === category.id && categoryStyles.categoryTextActive,
            ]}
          >
            {category.name}
          </Text>
          {selectedCategory === category.id && (
            <View style={categoryStyles.categoryUnderline} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryTabs;
