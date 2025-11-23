import { StyleSheet, Dimensions } from 'react-native';
import { colors, spacing, borderRadius, isSmallDevice, isMediumDevice } from './common';

const { width } = Dimensions.get('window');

export const productStyles = StyleSheet.create({
  sectionHeader: {
    paddingHorizontal: isSmallDevice ? spacing.md : spacing.lg,
    marginBottom: isSmallDevice ? 6 : spacing.sm,
  },
  sectionTitle: {
    fontSize: isSmallDevice ? 20 : isMediumDevice ? 22 : 24,
    fontWeight: '700',
    color: colors.primaryGreen,
  },
  sectionSubtitle: {
    fontSize: isSmallDevice ? 14 : 16,
    fontWeight: '600',
    color: colors.textDark,
    paddingHorizontal: isSmallDevice ? spacing.md : spacing.lg,
    marginBottom: isSmallDevice ? spacing.md : spacing.lg,
  },
  freshCategoryScroll: {
    marginBottom: isSmallDevice ? spacing.lg : spacing.xl,
  },
  freshCategoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: isSmallDevice ? spacing.md : spacing.lg,
    gap: isSmallDevice ? spacing.sm : spacing.md,
    paddingRight: isSmallDevice ? 24 : 32,
  },
  freshCategoryItem: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  freshCategoryIconBg: {
    width: isSmallDevice ? 50 : 60,
    height: isSmallDevice ? 50 : 60,
    borderRadius: isSmallDevice ? 25 : 30,
    backgroundColor: colors.primaryPink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  freshCategoryIcon: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.bgWhite,
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
    color: colors.textDark,
    fontWeight: '500',
  },
  productScroll: {
    marginBottom: isSmallDevice ? spacing.lg : spacing.xl,
  },
  productScrollContent: {
    paddingHorizontal: isSmallDevice ? spacing.md : spacing.lg,
    gap: isSmallDevice ? 10 : spacing.md,
    paddingRight: isSmallDevice ? 24 : 32,
  },
  productCard: {
    width: isSmallDevice ? width * 0.42 : width * 0.45,
    backgroundColor: colors.bgWhite,
    borderRadius: isSmallDevice ? borderRadius.md : borderRadius.lg,
    padding: isSmallDevice ? 10 : spacing.md,
    borderWidth: 1,
    borderColor: colors.borderColor,
    position: 'relative',
    marginRight: isSmallDevice ? 10 : spacing.md,
  },
  favoriteButton: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.bgWhite,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  favoriteIcon: {
    fontSize: 18,
    color: colors.primaryPink,
  },
  productImage: {
    fontSize: isSmallDevice ? 60 : isMediumDevice ? 70 : 80,
    textAlign: 'center',
    marginVertical: isSmallDevice ? spacing.sm : spacing.md,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  badge: {
    backgroundColor: colors.successColor,
    color: colors.bgWhite,
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: 4,
  },
  originalPrice: {
    fontSize: 12,
    color: colors.textLighter,
    textDecorationLine: 'line-through',
  },
  discount: {
    fontSize: 11,
    color: colors.successColor,
    fontWeight: '600',
    marginBottom: 6,
  },
  productName: {
    fontSize: isSmallDevice ? 12 : 14,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 2,
  },
  productWeight: {
    fontSize: isSmallDevice ? 10 : 11,
    color: colors.textLight,
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
    color: colors.textLight,
  },
  addButton: {
    backgroundColor: colors.bgWhite,
    borderWidth: 1.5,
    borderColor: colors.primaryPink,
    borderRadius: spacing.sm,
    paddingVertical: spacing.sm,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primaryPink,
  },
  seeAllButton: {
    backgroundColor: colors.bgLightPink,
    marginHorizontal: isSmallDevice ? spacing.md : spacing.lg,
    marginTop: isSmallDevice ? spacing.md : spacing.lg,
    marginBottom: isSmallDevice ? spacing.lg : spacing.xl,
    paddingVertical: isSmallDevice ? spacing.md : 14,
    borderRadius: isSmallDevice ? borderRadius.md : borderRadius.lg,
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: isSmallDevice ? 13 : 15,
    fontWeight: '600',
    color: colors.primaryPink,
  },
  extraContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: 100,
  },
  bannerPlaceholder: {
    backgroundColor: '#F0F8FF',
    padding: 40,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 16,
    color: colors.textLight,
  },
});
