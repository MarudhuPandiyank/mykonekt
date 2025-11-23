import React from 'react';
import { View, Text } from 'react-native';
import { promoStyles } from '../styles/promoStyles';

/**
 * PromoBanner Component
 * Displays promotional banners, benefits, and offer cards
 * Includes free delivery info and discount offers
 */
const PromoBanner: React.FC = () => {
  return (
    <>
      {/* Promotional Banners */}
      <View style={promoStyles.promoBanner}>
        <View style={promoStyles.promoLeft}>
          <Text style={promoStyles.promoIcon}>🛍️</Text>
          <Text style={promoStyles.promoTextLarge}>₹0 FEES</Text>
        </View>
        <View style={promoStyles.promoRight}>
          <Text style={promoStyles.promoIcon}>💰</Text>
          <Text style={promoStyles.promoTextBold}>EVERYDAY</Text>
          <Text style={promoStyles.promoTextPurple}>LOWEST PRICES*</Text>
        </View>
      </View>

      {/* Free Delivery Benefits */}
      <View style={promoStyles.benefitsContainer}>
        <View style={promoStyles.benefitItem}>
          <Text style={promoStyles.benefitIcon}>✓</Text>
          <Text style={promoStyles.benefitText}>₹0 Handling Fee</Text>
        </View>
        <View style={promoStyles.benefitItem}>
          <Text style={promoStyles.benefitIcon}>✓</Text>
          <Text style={promoStyles.benefitText}>₹0 Delivery Fee*</Text>
        </View>
        <View style={promoStyles.benefitItem}>
          <Text style={promoStyles.benefitIcon}>✓</Text>
          <Text style={promoStyles.benefitText}>₹0 Rain & Surge Fee</Text>
        </View>
      </View>

      {/* Offer Cards */}
      <View style={promoStyles.offerContainer}>
        <View style={promoStyles.offerCard}>
          <Text style={promoStyles.offerAmount}>₹50 off</Text>
          <Text style={promoStyles.offerCondition}>on ₹799 & above</Text>
        </View>
        <View style={promoStyles.offerCard}>
          <Text style={promoStyles.offerAmount}>₹150 off</Text>
          <Text style={promoStyles.offerCondition}>on ₹1999 & above</Text>
        </View>
        <View style={promoStyles.offerCard}>
          <Text style={promoStyles.offerAmount}>₹200 off</Text>
          <Text style={promoStyles.offerCondition}>on ₹2599 & above</Text>
        </View>
      </View>
    </>
  );
};

export default PromoBanner;
