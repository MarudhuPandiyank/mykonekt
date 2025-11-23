import { StyleSheet } from 'react-native';
import { colors, spacing, isSmallDevice } from './common';

export const categoryStyles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: isSmallDevice ? spacing.sm : spacing.lg,
    paddingBottom: isSmallDevice ? 10 : spacing.md,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: isSmallDevice ? 28 : 32,
    marginBottom: 4,
  },
  categoryText: {
    fontSize: isSmallDevice ? 11 : 13,
    color: colors.textMedium,
    fontWeight: '500',
  },
  categoryTextActive: {
    color: colors.textDark,
    fontWeight: '600',
  },
  categoryUnderline: {
    width: '100%',
    height: 2,
    backgroundColor: colors.textDark,
    marginTop: 4,
  },
});
