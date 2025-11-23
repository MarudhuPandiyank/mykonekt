import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

interface SettingsScreenProps {
  onBack?: () => void;
}

/**
 * SettingsScreen Component
 * User profile and settings page
 */
const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* User Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileAvatar}>
            <Text style={styles.avatarIcon}>👤</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>marudhu</Text>
            <Text style={styles.profilePhone}>72004 72612</Text>
          </View>
        </View>

        {/* Quick Access Cards */}
        <View style={styles.quickAccessContainer}>
          <TouchableOpacity style={styles.quickAccessCard}>
            <View style={styles.quickAccessIcon}>
              <Text style={styles.iconEmoji}>🛍️</Text>
            </View>
            <Text style={styles.quickAccessTitle}>Your</Text>
            <Text style={styles.quickAccessTitle}>Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAccessCard}>
            <View style={styles.quickAccessIcon}>
              <Text style={styles.iconEmoji}>💬</Text>
            </View>
            <Text style={styles.quickAccessTitle}>Help &</Text>
            <Text style={styles.quickAccessTitle}>Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAccessCard}>
            <View style={styles.quickAccessIcon}>
              <Text style={styles.iconEmoji}>❤️</Text>
            </View>
            <Text style={styles.quickAccessTitle}>Your</Text>
            <Text style={styles.quickAccessTitle}>Wishlist</Text>
          </TouchableOpacity>
        </View>

        {/* Zepto Cash & Gift Card */}
        <TouchableOpacity style={styles.giftCardBanner}>
          <View style={styles.giftCardLeft}>
            <View style={styles.giftCardIcon}>
              <Text style={styles.giftCardEmoji}>🎁</Text>
            </View>
            <Text style={styles.giftCardTitle}>Zepto Cash & Gift Card</Text>
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>NEW</Text>
            </View>
          </View>
          <Text style={styles.chevronRight}>›</Text>
        </TouchableOpacity>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balanceAmount}>₹0</Text>
          <TouchableOpacity style={styles.addBalanceButton}>
            <Text style={styles.addBalanceText}>Add Balance</Text>
          </TouchableOpacity>
        </View>

        {/* Your Information Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Information</Text>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconCircle}>
              <Text style={styles.menuIcon}>₹</Text>
            </View>
            <Text style={styles.menuText}>Your Refunds</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconCircle}>
              <Text style={styles.menuIcon}>❤️</Text>
            </View>
            <Text style={styles.menuText}>Your Wishlist</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconCircle}>
              <Text style={styles.menuIcon}>💳</Text>
            </View>
            <Text style={styles.menuText}>E-Gift Cards</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconCircle}>
              <Text style={styles.menuIcon}>💬</Text>
            </View>
            <Text style={styles.menuText}>Help & Support</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconCircle}>
              <Text style={styles.menuIcon}>📍</Text>
            </View>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuText}>Saved Addresses</Text>
              <Text style={styles.menuSubtext}>1 Addresses</Text>
            </View>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconCircle}>
              <Text style={styles.menuIcon}>👤</Text>
            </View>
            <Text style={styles.menuText}>Profile</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconCircle}>
              <Text style={styles.menuIcon}>🎁</Text>
            </View>
            <Text style={styles.menuText}>Rewards</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconCircle}>
              <Text style={styles.menuIcon}>💳</Text>
            </View>
            <Text style={styles.menuText}>Payment Management</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Other Information Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Other Information</Text>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconCircle}>
              <Text style={styles.menuIcon}>⭐</Text>
            </View>
            <Text style={styles.menuText}>Suggest Products</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconCircle}>
              <Text style={styles.menuIcon}>🔔</Text>
            </View>
            <Text style={styles.menuText}>Notifications</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconCircle}>
              <Text style={styles.menuIcon}>ℹ️</Text>
            </View>
            <Text style={styles.menuText}>General Info</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        {/* App Version */}
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>App version 25.11.3</Text>
          <Text style={styles.versionText}>v101-1</Text>
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: 8,
    marginRight: 16,
  },
  backIcon: {
    fontSize: 24,
    color: '#333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    backgroundColor: '#E8E3F3',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 16,
  },
  profileAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#9575CD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarIcon: {
    fontSize: 22,
    color: '#FFFFFF',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  profilePhone: {
    fontSize: 13,
    color: '#666',
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  quickAccessCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: '31%',
    padding: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  quickAccessIcon: {
    marginBottom: 12,
  },
  iconEmoji: {
    fontSize: 32,
  },
  quickAccessTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  giftCardBanner: {
    backgroundColor: '#E8E3F3',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  giftCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  giftCardIcon: {
    marginRight: 12,
  },
  giftCardEmoji: {
    fontSize: 28,
  },
  giftCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
  newBadge: {
    backgroundColor: '#00A651',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  newBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  chevronRight: {
    fontSize: 28,
    color: '#999',
  },
  balanceContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#999',
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginLeft: 12,
  },
  addBalanceButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addBalanceText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 24,
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  menuIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuIcon: {
    fontSize: 20,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  menuSubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 2,
  },
  menuChevron: {
    fontSize: 24,
    color: '#999',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginLeft: 72,
  },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  versionContainer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  versionText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 2,
  },
  bottomSpacing: {
    height: 40,
  },
});

export default SettingsScreen;
