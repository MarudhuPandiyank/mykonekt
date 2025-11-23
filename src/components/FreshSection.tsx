import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { productStyles } from '../styles/productStyles';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  weight: string;
  price: number;
  originalPrice: number;
  discount: string;
  deliveryTime: string;
  image: string;
}

interface FreshCategory {
  id: string;
  name: string;
  icon: string;
  bgStyle?: 'filled' | 'circle';
}

interface FreshSectionProps {
  products: Product[];
}

const freshCategories: FreshCategory[] = [
  { id: '9zone', name: '₹9 Zone', icon: '₹9', bgStyle: 'filled' },
  { id: 'veggies', name: 'Veggies', icon: '🥬', bgStyle: 'circle' },
  { id: 'fruits', name: 'Fruits', icon: '🍊', bgStyle: 'circle' },
  { id: 'exotics', name: 'Exotics', icon: '🥝', bgStyle: 'circle' },
  { id: 'roots', name: 'Roots', icon: '🥕', bgStyle: 'circle' },
  { id: 'herbs', name: 'Herbs', icon: '🌿', bgStyle: 'circle' },
  { id: 'organic', name: 'Organic', icon: '🥒', bgStyle: 'circle' },
  { id: 'berries', name: 'Berries', icon: '🍇', bgStyle: 'circle' },
  { id: 'seasonal', name: 'Seasonal', icon: '🥑', bgStyle: 'circle' },
];

/**
 * FreshSection Component
 * Displays "Fresh at ₹9" section with category filters and product grid
 * Includes horizontal scrollable category icons and product cards
 */
const FreshSection: React.FC<FreshSectionProps> = ({ products }) => {
  return (
    <>
      {/* Section Header */}
      <View style={productStyles.sectionHeader}>
        <Text style={productStyles.sectionTitle}>Fresh at ₹9</Text>
      </View>
      <Text style={productStyles.sectionSubtitle}>Fruits & Veggies</Text>

      {/* Category Icons - Horizontal Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={productStyles.freshCategoryScroll}
        contentContainerStyle={productStyles.freshCategoryContainer}
      >
        {freshCategories.map((category) => (
          <TouchableOpacity key={category.id} style={productStyles.freshCategoryItem}>
            {category.bgStyle === 'filled' ? (
              <View style={productStyles.freshCategoryIconBg}>
                <Text style={productStyles.freshCategoryIcon}>{category.icon}</Text>
              </View>
            ) : (
              <View style={productStyles.freshCategoryIconCircle}>
                <Text style={productStyles.freshIcon}>{category.icon}</Text>
              </View>
            )}
            <Text style={productStyles.freshCategoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Product Grid - Horizontal Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={productStyles.productScroll}
        contentContainerStyle={productStyles.productScrollContent}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>

      {/* See All Button */}
      <TouchableOpacity style={productStyles.seeAllButton}>
        <Text style={productStyles.seeAllText}>See all ›</Text>
      </TouchableOpacity>
    </>
  );
};

export default FreshSection;
