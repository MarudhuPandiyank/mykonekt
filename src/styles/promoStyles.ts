import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, isSmallDevice } from './common';

export const promoStyles = StyleSheet.create({
  promoBanner: {
    flexDirection: 'row',
    marginHorizontal: isSmallDevice ? spacing.md : spacing.lg,
    marginBottom: isSmallDevice ? spacing.md : spacing.lg,
    backgroundColor: colors.bgGray,
    borderRadius: isSmallDevice ? borderRadius.md : borderRadius.lg,
    padding: isSmallDevice ? spacing.md : spacing.lg,
    gap: isSmallDevice ? spacing.sm : spacing.md,
  },
  promoLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  promoRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  promoIcon: {
    fontSize: isSmallDevice ? 20 : 24,
  },
  promoTextLarge: {
    fontSize: isSmallDevice ? 16 : 18,
    fontWeight: '700',
    color: colors.primaryPurple,
  },
  promoTextBold: {
    fontSize: isSmallDevice ? 11 : 13,
    fontWeight: '700',
    color: colors.textDark,
  },
  promoTextPurple: {
    fontSize: isSmallDevice ? 11 : 13,
    fontWeight: '700',
    color: colors.primaryPurple,
  },
  benefitsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: isSmallDevice ? spacing.md : spacing.lg,
    marginBottom: isSmallDevice ? spacing.md : spacing.lg,
    gap: isSmallDevice ? 4 : spacing.sm,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  benefitIcon: {
    fontSize: 14,
    color: colors.successColor,
  },
  benefitText: {
    fontSize: isSmallDevice ? 9 : 11,
    color: colors.primaryPurple,
    fontWeight: '500',
  },
  offerContainer: {
    flexDirection: 'row',
    paddingHorizontal: isSmallDevice ? spacing.md : spacing.lg,
    marginBottom: isSmallDevice ? spacing.lg : spacing.xl,
    gap: isSmallDevice ? 6 : 10,
  },
  offerCard: {
    flex: 1,
    backgroundColor: colors.bgWhite,
    borderWidth: 1.5,
    borderColor: colors.borderColor,
    borderRadius: isSmallDevice ? borderRadius.md : borderRadius.lg,
    padding: isSmallDevice ? 10 : spacing.md,
    alignItems: 'center',
  },
  offerAmount: {
    fontSize: isSmallDevice ? 14 : 16,
    fontWeight: '700',
    color: colors.primaryPurple,
    marginBottom: 4,
  },
  offerCondition: {
    fontSize: isSmallDevice ? 10 : 11,
    color: colors.textLight,
  },
});
