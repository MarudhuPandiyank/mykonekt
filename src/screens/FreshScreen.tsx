import React, { useRef } from 'react';
import { View, Text, ScrollView, Animated, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';

interface FreshCategory {
  id: string;
  name: string;
  icon: string;
}

interface Product {
  id: number;
  name: string;
  weight: string;
  price: number;
  originalPrice: number;
  discount: string;
  deliveryTime: string;
  image: string;
  isFavorite?: boolean;
}

interface CategoryCard {
  id: string;
  title: string;
  image: string;
}

interface FreshScreenProps {
  scrollY: Animated.Value;
}

const freshCategories: FreshCategory[] = [
  { id: '9zone', name: '₹9 Zone', icon: '₹9' },
  { id: 'vegetables', name: 'Vegetables', icon: '🍅' },
  { id: 'fruits', name: 'Fruits', icon: '🍊' },
  { id: 'exotics', name: 'Exotics', icon: '🥝' },
  { id: 'new', name: 'New Launches', icon: '🌟' },
];

const products: Product[] = [
  {
    id: 1,
    name: 'Potato',
    weight: '(450-500 g)',
    price: 9,
    originalPrice: 29,
    discount: '₹20 OFF',
    deliveryTime: '10 mins',
    image: '🥔',
    isFavorite: true,
  },
  {
    id: 2,
    name: 'Tomato Local',
    weight: '250 g',
    price: 9,
    originalPrice: 36,
    discount: '₹27 OFF',
    deliveryTime: '10 mins',
    image: '🍅',
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Banana Robusta',
    weight: '2 pcs',
    price: 9,
    originalPrice: 22,
    discount: '₹13 OFF',
    deliveryTime: '10 mins',
    image: '🍌',
    isFavorite: false,
  },
];

const categoryCards: CategoryCard[] = [
  { id: 'fresh-fruits', title: 'Fresh\nFruits', image: '🍎🥝🍇' },
  { id: 'fresh-veggies', title: 'Fresh\nVeggies', image: '🍅🥬🥕' },
  { id: 'leafy-herbs', title: 'Leafy &\nHerbs', image: '🌿🥬' },
  { id: 'exotics', title: 'Exotics', image: '🥒🥑🫑' },
  { id: 'organic', title: 'Organic', image: '🍊' },
  { id: 'cut-sprouts', title: 'Cut &\nSprouts', image: '🌾' },
];

const freshArrivals: Product[] = [
  {
    id: 1,
    name: 'Strawberry\n(Mahabaleshwar)',
    weight: '1 pack (Approx. 160g - 180g)',
    price: 146,
    originalPrice: 256,
    discount: '₹110 OFF',
    deliveryTime: '10 mins',
    image: '🍓',
  },
  {
    id: 2,
    name: 'Grapes Green Sonaka\nSeedless',
    weight: '250 g',
    price: 54,
    originalPrice: 88,
    discount: '₹34 OFF',
    deliveryTime: '10 mins',
    image: '🍇',
  },
  {
    id: 3,
    name: 'Organic Green\nChilli (Kariveppaku)',
    weight: '100 g',
    price: 14,
    originalPrice: 26,
    discount: '₹12 OFF',
    deliveryTime: '10 mins',
    image: '🌶️',
  },
];

/**
 * FreshScreen Component
 * Main Fresh section with banner, categories, products, and sections
 */
const FreshScreen: React.FC<FreshScreenProps> = ({ scrollY }) => {
  return (
    <View style={styles.container}>
      {/* Fresh Veggies Banner */}
      <View style={styles.bannerSection}>
        <View style={styles.bannerLeft}>
          <Text style={styles.bannerTitle}>FRESH</Text>
          <Text style={styles.bannerTitle}>VEGGIES</Text>
          <View style={styles.offerBadge}>
            <Text style={styles.offerIcon}>ℹ️</Text>
            <Text style={styles.offerText}>Offer valid till stocks last</Text>
          </View>
        </View>
        <View style={styles.bannerRight}>
          <View style={styles.priceBadge}>
            <Text style={styles.rupeeSymbol}>₹</Text>
            <Text style={styles.priceNumber}>9</Text>
          </View>
        </View>
        <View style={styles.bannerImage}>
          <Text style={styles.veggieEmoji}>🥬🍅🥕🥔</Text>
        </View>
      </View>

      {/* Fresh Categories - Horizontal Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
        contentContainerStyle={styles.categoryScrollContent}
      >
        {freshCategories.map((category, index) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            {index === 0 ? (
              <View style={styles.categoryIconFilled}>
                <Text style={styles.categoryIconText}>{category.icon}</Text>
              </View>
            ) : (
              <View style={styles.categoryIconCircle}>
                <Text style={styles.categoryEmoji}>{category.icon}</Text>
              </View>
            )}
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Product Cards - Horizontal Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.productScroll}
        contentContainerStyle={styles.productScrollContent}
      >
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <TouchableOpacity style={styles.favoriteButton}>
              <Text style={styles.favoriteIcon}>{product.isFavorite ? '❤️' : '🤍'}</Text>
            </TouchableOpacity>
            <View style={styles.productImageContainer}>
              <Text style={styles.productEmoji}>{product.image}</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
            <View style={styles.priceRow}>
              <View style={styles.priceTag}>
                <Text style={styles.priceSymbol}>₹{product.price}</Text>
              </View>
              <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
            </View>
            <Text style={styles.discount}>{product.discount}</Text>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productWeight}>{product.weight}</Text>
            <View style={styles.deliveryRow}>
              <Text style={styles.deliveryIcon}>⚡</Text>
              <Text style={styles.deliveryTime}>{product.deliveryTime}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* See All Button */}
      <TouchableOpacity style={styles.seeAllButton}>
        <Text style={styles.seeAllText}>See all ›</Text>
      </TouchableOpacity>

      {/* Shop by Category Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Shop by Category</Text>
      </View>
      <View style={styles.categoryGrid}>
        {categoryCards.map((card) => (
          <TouchableOpacity key={card.id} style={styles.categoryCard}>
            <Text style={styles.categoryCardTitle}>{card.title}</Text>
            <Text style={styles.categoryCardImage}>{card.image}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Fresh Arrivals Section */}
      <View style={styles.arrivalsHeader}>
        <Text style={styles.arrivalsTitle}>Fresh Arrivals</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllLink}>See All ›</Text>
        </TouchableOpacity>
      </View>

      {/* Fresh Arrivals Products - Horizontal Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.arrivalsScroll}
        contentContainerStyle={styles.arrivalsScrollContent}
      >
        {freshArrivals.map((product) => (
          <View key={product.id} style={styles.arrivalCard}>
            {product.id === 1 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>MILDLY</Text>
                <Text style={styles.badgeText}>SWEET</Text>
              </View>
            )}
            {product.id === 2 && (
              <View style={styles.badgeAlt}>
                <Text style={styles.badgeAltText}>Sweet</Text>
                <Text style={styles.badgeAltText}>& Tangy</Text>
              </View>
            )}
            <View style={styles.arrivalImageContainer}>
              <Text style={styles.arrivalEmoji}>{product.image}</Text>
            </View>
            <TouchableOpacity style={styles.addButtonArrival}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
            <View style={styles.priceRow}>
              <View style={styles.priceTag}>
                <Text style={styles.priceSymbol}>₹{product.price}</Text>
              </View>
              <Text style={styles.originalPrice}>₹{product.originalPrice}</Text>
            </View>
            <Text style={styles.discount}>{product.discount}</Text>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productWeight}>{product.weight}</Text>
            <View style={styles.deliveryRow}>
              <Text style={styles.deliveryIcon}>⚡</Text>
              <Text style={styles.deliveryTime}>{product.deliveryTime}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Offers Button */}
      <TouchableOpacity style={styles.offersButton}>
        <Text style={styles.offersText}>Offers ^</Text>
      </TouchableOpacity>

      {/* Bottom Spacing */}
      <View style={styles.bottomSpacing} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bannerSection: {
    backgroundColor: '#FFFFFF',
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    minHeight: 160,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  bannerLeft: {
    flex: 1,
    padding: 20,
    backgroundColor: '#00A651',
    zIndex: 1,
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FFFFFF',
    lineHeight: 32,
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  offerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  offerIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  offerText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  bannerRight: {
    position: 'absolute',
    right: 20,
    top: '50%',
    transform: [{ translateY: -45 }],
    zIndex: 2,
  },
  priceBadge: {
    backgroundColor: '#FFD700',
    borderRadius: 50,
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  rupeeSymbol: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3436',
    marginTop: -4,
  },
  priceNumber: {
    fontSize: 38,
    fontWeight: '900',
    color: '#2D3436',
    marginTop: -6,
  },
  bannerImage: {
    position: 'absolute',
    right: -10,
    bottom: -5,
    opacity: 0.15,
    zIndex: 0,
  },
  veggieEmoji: {
    fontSize: 80,
  },
  categoryScroll: {
    marginTop: 16,
    paddingLeft: 16,
  },
  categoryScrollContent: {
    paddingRight: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
    width: 70,
  },
  categoryIconFilled: {
    backgroundColor: '#E91E63',
    borderRadius: 40,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIconText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  categoryIconCircle: {
    backgroundColor: '#F5F5F5',
    borderRadius: 40,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryEmoji: {
    fontSize: 32,
  },
  categoryName: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
  },
  productScroll: {
    marginTop: 16,
    paddingLeft: 16,
  },
  productScrollContent: {
    paddingRight: 16,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: 180,
    marginRight: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },
  favoriteIcon: {
    fontSize: 20,
  },
  productImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    marginBottom: 8,
  },
  productEmoji: {
    fontSize: 64,
  },
  addButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E91E63',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 8,
  },
  addButtonText: {
    color: '#E91E63',
    fontSize: 14,
    fontWeight: 'bold',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  priceTag: {
    backgroundColor: '#00A651',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 6,
  },
  priceSymbol: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  discount: {
    fontSize: 12,
    color: '#00A651',
    fontWeight: '600',
    marginBottom: 4,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  productWeight: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  deliveryTime: {
    fontSize: 12,
    color: '#666',
  },
  seeAllButton: {
    backgroundColor: '#FFE8F0',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  seeAllText: {
    color: '#E91E63',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  categoryCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    width: '48%',
    padding: 16,
    marginBottom: 12,
    minHeight: 120,
    justifyContent: 'space-between',
  },
  categoryCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 22,
  },
  categoryCardImage: {
    fontSize: 36,
    textAlign: 'right',
  },
  arrivalsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
  },
  arrivalsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllLink: {
    fontSize: 16,
    color: '#E91E63',
    fontWeight: '600',
  },
  arrivalsScroll: {
    paddingLeft: 16,
  },
  arrivalsScrollContent: {
    paddingRight: 16,
  },
  arrivalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: 180,
    marginRight: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#E53935',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 1,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  badgeAlt: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#333',
    zIndex: 1,
  },
  badgeAltText: {
    color: '#333',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  arrivalImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    marginBottom: 8,
  },
  arrivalEmoji: {
    fontSize: 64,
  },
  addButtonArrival: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E91E63',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 8,
  },
  offersButton: {
    backgroundColor: '#F5F5F5',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  offersText: {
    color: '#E91E63',
    fontSize: 14,
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 100,
  },
});

export default FreshScreen;
