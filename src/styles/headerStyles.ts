import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, isSmallDevice } from './common';

export const headerStyles = StyleSheet.create({
  headerSection: {
    backgroundColor: colors.bgLightPurple,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: isSmallDevice ? spacing.md : spacing.lg,
    paddingTop: isSmallDevice ? spacing.sm : 10,
    paddingBottom: isSmallDevice ? 10 : spacing.md,
  },
  deliveryInfo: {
    flex: 1,
  },
  deliveryTime: {
    fontSize: isSmallDevice ? 20 : 24,
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: isSmallDevice ? 11 : 13,
    color: colors.textMedium,
    marginRight: 4,
    flexShrink: 1,
  },
  dropdownIcon: {
    fontSize: 10,
    color: colors.textMedium,
  },
  profileIcon: {
    width: isSmallDevice ? 36 : 40,
    height: isSmallDevice ? 36 : 40,
    borderRadius: isSmallDevice ? 18 : 20,
    backgroundColor: colors.bgWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIconText: {
    fontSize: 20,
  },
  brandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: isSmallDevice ? spacing.md : spacing.lg,
    marginBottom: isSmallDevice ? spacing.md : spacing.lg,
    gap: isSmallDevice ? 6 : 10,
  },
  brandButton: {
    flex: 1,
    backgroundColor: colors.bgWhite,
    borderRadius: isSmallDevice ? borderRadius.md : borderRadius.lg,
    paddingVertical: isSmallDevice ? 10 : spacing.md,
    paddingHorizontal: isSmallDevice ? 4 : spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: isSmallDevice ? 45 : 50,
  },
  brandButtonActive: {
    backgroundColor: '#F0E6FF',
    borderWidth: 2,
    borderColor: colors.primaryPurple,
  },
  brandTextPurple: {
    fontSize: isSmallDevice ? 12 : 14,
    fontWeight: '700',
    color: colors.primaryPurple,
  },
  brandTextBlue: {
    fontSize: isSmallDevice ? 14 : 16,
    fontWeight: '700',
    color: colors.primaryBlue,
  },
  brandTextGreen: {
    fontSize: isSmallDevice ? 11 : 13,
    fontWeight: '700',
    color: colors.primaryGreen,
  },
  brandTextSmall: {
    fontSize: isSmallDevice ? 9 : 10,
    fontWeight: '600',
    color: colors.primaryBlue,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgWhite,
    borderRadius: isSmallDevice ? borderRadius.md : borderRadius.lg,
    paddingHorizontal: isSmallDevice ? 10 : spacing.md,
    paddingVertical: isSmallDevice ? spacing.sm : 10,
    marginHorizontal: isSmallDevice ? spacing.md : spacing.lg,
    marginBottom: isSmallDevice ? spacing.md : spacing.lg,
    position: 'relative',
  },
  searchIcon: {
    fontSize: isSmallDevice ? 16 : 18,
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: isSmallDevice ? 13 : 15,
    color: colors.textDark,
  },
  adBanner: {
    backgroundColor: '#FFF9E6',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
  },
  adText: {
    fontSize: isSmallDevice ? 10 : 11,
    fontWeight: '600',
    color: colors.orangeColor,
  },
});
