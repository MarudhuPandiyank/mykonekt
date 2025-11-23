import { StyleSheet, Dimensions, Platform, StatusBar as RNStatusBar } from 'react-native';

const { width } = Dimensions.get('window');
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 44 : RNStatusBar.currentHeight || 0;
const isSmallDevice = width < 375;
const isMediumDevice = width >= 375 && width < 414;

export const colors = {
  primaryPurple: '#8B4FB5',
  primaryGreen: '#228B22',
  primaryPink: '#FF1493',
  primaryBlue: '#4169E1',
  bgLightPurple: '#E8D5F2',
  bgLightPink: '#FFE6F0',
  bgWhite: '#fff',
  bgGray: '#F8F8F8',
  textDark: '#333',
  textMedium: '#555',
  textLight: '#666',
  textLighter: '#999',
  borderColor: '#E0E0E0',
  borderColorLight: '#D0B5E0',
  successColor: '#4CAF50',
  orangeColor: '#FF8C00',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
};

export const borderRadius = {
  sm: 6,
  md: 10,
  lg: 12,
  xl: 20,
};

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgLightPurple,
    paddingTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    backgroundColor: colors.bgWhite,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
    paddingTop: spacing.xl,
    marginTop: -10,
  },
});

export { width, isSmallDevice, isMediumDevice, STATUS_BAR_HEIGHT };
