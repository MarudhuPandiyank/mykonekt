import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { productStyles } from '../styles/productStyles';

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

interface ProductCardProps {
  product: Product;
}

/**
 * ProductCard Component
 * Reusable product card displaying product details, pricing, and add button
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <View style={productStyles.productCard}>
      <TouchableOpacity style={productStyles.favoriteButton}>
        <Text style={productStyles.favoriteIcon}>♡</Text>
      </TouchableOpacity>
      <Text style={productStyles.productImage}>{product.image}</Text>
      <View style={productStyles.priceRow}>
        <Text style={productStyles.badge}>₹{product.price}</Text>
        <Text style={productStyles.originalPrice}>₹{product.originalPrice}</Text>
      </View>
      <Text style={productStyles.discount}>{product.discount}</Text>
      <Text style={productStyles.productName}>{product.name}</Text>
      <Text style={productStyles.productWeight}>{product.weight}</Text>
      <View style={productStyles.deliveryRow}>
        <Text style={productStyles.deliveryIcon}>⚡</Text>
        <Text style={productStyles.deliveryText}>{product.deliveryTime}</Text>
      </View>
      <TouchableOpacity style={productStyles.addButton}>
        <Text style={productStyles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
