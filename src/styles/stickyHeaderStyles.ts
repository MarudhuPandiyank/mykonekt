import { StyleSheet, Platform } from 'react-native';
import { colors, spacing, borderRadius, isSmallDevice, STATUS_BAR_HEIGHT } from './common';

export const stickyHeaderStyles = StyleSheet.create({
  stickyHeader: {
    position: 'absolute',
    top: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
    left: 0,
    right: 0,
    backgroundColor: colors.bgLightPurple,
    zIndex: 1000,
    paddingTop: isSmallDevice ? spacing.sm : 10,
    paddingHorizontal: isSmallDevice ? spacing.md : spacing.lg,
  },
  stickySearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgWhite,
    borderRadius: isSmallDevice ? borderRadius.md : borderRadius.lg,
    paddingHorizontal: isSmallDevice ? 10 : spacing.md,
    paddingVertical: isSmallDevice ? spacing.sm : 10,
    marginBottom: isSmallDevice ? 10 : spacing.md,
  },
  stickySearchInput: {
    flex: 1,
    fontSize: isSmallDevice ? 13 : 15,
    color: colors.textDark,
    marginLeft: spacing.sm,
  },
  compactCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.bgLightPurple,
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColorLight,
  },
  compactCategoryTab: {
    paddingVertical: spacing.sm,
    paddingHorizontal: 4,
  },
  compactCategoryTabActive: {
    borderBottomWidth: 2,
    borderBottomColor: colors.textDark,
  },
  compactCategoryText: {
    fontSize: isSmallDevice ? 11 : 13,
    color: colors.textLight,
    fontWeight: '500',
  },
  compactCategoryTextActive: {
    color: colors.textDark,
    fontWeight: '600',
  },
  searchIcon: {
    fontSize: isSmallDevice ? 16 : 18,
  },
});
