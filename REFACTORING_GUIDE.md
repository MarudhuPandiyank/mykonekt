# App Refactoring Documentation

## Overview
The App.tsx has been refactored into reusable, modular components with separated styles. This improves code maintainability, readability, and reusability.

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx              # Top header with delivery info, brand tabs, search
│   ├── StickyHeader.tsx        # Sticky header that appears on scroll
│   ├── CategoryTabs.tsx        # Category navigation tabs with icons
│   ├── PromoBanner.tsx         # Promotional banners and offers
│   ├── ProductCard.tsx         # Individual product card component
│   ├── FreshSection.tsx        # Fresh products section with categories
│   └── index.ts                # Components barrel export
│
└── styles/              # StyleSheet definitions
    ├── common.ts               # Common styles, colors, spacing constants
    ├── headerStyles.ts         # Header component styles
    ├── stickyHeaderStyles.ts   # Sticky header styles
    ├── categoryStyles.ts       # Category tabs styles
    ├── promoStyles.ts          # Promo banner and offers styles
    ├── productStyles.ts        # Product card and section styles
    └── index.ts                # Styles barrel export
```

## Components

### 1. **Header Component** (`src/components/Header.tsx`)
**Purpose**: Main header displayed at the top of the app
**Features**:
- Delivery time and location display
- Brand selection tabs (zepto, 50% OFF ZONE, Super Mall, café)
- Search bar with promotional banner
- Animated search bar that moves on scroll

**Props**:
- `selectedBrand`: Current selected brand
- `setSelectedBrand`: Function to update selected brand
- `searchBarTop`: Animated value for search bar position
- `categories`: Array of category objects
- `selectedCategory`: Current selected category
- `setSelectedCategory`: Function to update selected category

**Usage**:
```tsx
<Header
  selectedBrand={selectedBrand}
  setSelectedBrand={setSelectedBrand}
  searchBarTop={searchBarTop}
  categories={categories}
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>
```

---

### 2. **StickyHeader Component** (`src/components/StickyHeader.tsx`)
**Purpose**: Compact header that appears when user scrolls down
**Features**:
- Compact search bar
- Simplified category tabs without icons
- Fades in based on scroll position

**Props**:
- `scrollY`: Animated value for scroll position
- `scrollThreshold`: Pixel value when to show sticky header
- `categories`: Array of category objects
- `selectedCategory`: Current selected category
- `setSelectedCategory`: Function to update selected category

**Usage**:
```tsx
<StickyHeader
  scrollY={scrollY}
  scrollThreshold={200}
  categories={categories}
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>
```

---

### 3. **CategoryTabs Component** (`src/components/CategoryTabs.tsx`)
**Purpose**: Display category navigation with icons
**Features**:
- Shows category icon and name
- Highlights active category with underline
- Touchable for navigation

**Props**:
- `categories`: Array of category objects with id, name, and icon
- `selectedCategory`: Current selected category ID
- `setSelectedCategory`: Function to update selected category

**Usage**:
```tsx
<CategoryTabs
  categories={categories}
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>
```

---

### 4. **PromoBanner Component** (`src/components/PromoBanner.tsx`)
**Purpose**: Display promotional content and offers
**Features**:
- ₹0 Fees banner
- Free delivery benefits
- Discount offer cards (₹50 off, ₹150 off, ₹200 off)

**Props**: None (static content)

**Usage**:
```tsx
<PromoBanner />
```

---

### 5. **ProductCard Component** (`src/components/ProductCard.tsx`)
**Purpose**: Reusable product card for displaying individual products
**Features**:
- Product image (emoji)
- Pricing with discount badge
- Product name and weight
- Delivery time
- Add to cart button
- Favorite button

**Props**:
- `product`: Product object with id, name, weight, price, originalPrice, discount, deliveryTime, image

**Usage**:
```tsx
<ProductCard product={productData} />
```

---

### 6. **FreshSection Component** (`src/components/FreshSection.tsx`)
**Purpose**: Display "Fresh at ₹9" section with categories and products
**Features**:
- Section header with title
- Horizontal scrollable category icons
- Horizontal scrollable product cards
- "See all" button

**Props**:
- `products`: Array of product objects

**Usage**:
```tsx
<FreshSection products={products} />
```

---

## Styles

### Style Files Organization

All styles are separated into TypeScript files using React Native's `StyleSheet.create()` for optimal performance.

#### **common.ts**
- Contains shared constants: colors, spacing, border radius
- Device detection utilities (isSmallDevice, isMediumDevice)
- Common styles used across the app
- Status bar height calculation

#### **headerStyles.ts**
- Styles for Header component
- Brand button styles
- Search bar styles
- Delivery info styles

#### **stickyHeaderStyles.ts**
- Styles for sticky header
- Compact category tabs
- Sticky search container

#### **categoryStyles.ts**
- Category tab styles
- Category icon and text styles
- Active category underline

#### **promoStyles.ts**
- Promotional banner styles
- Benefits container styles
- Offer card styles

#### **productStyles.ts**
- Product card styles
- Fresh category section styles
- Section headers
- Product grid and scrolling

---

## Data Types

### Category Type
```typescript
interface Category {
  id: string;
  name: string;
  icon: string;
}
```

### Product Type
```typescript
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
```

---

## How to Use the Refactored Code

### Option 1: Replace App.tsx
Replace your current `App.tsx` with `App_Refactored.tsx`:
```bash
# Backup original
mv App.tsx App_Original.tsx

# Use refactored version
mv App_Refactored.tsx App.tsx
```

### Option 2: Import Components Individually
```tsx
import Header from './src/components/Header';
import StickyHeader from './src/components/StickyHeader';
import CategoryTabs from './src/components/CategoryTabs';
import PromoBanner from './src/components/PromoBanner';
import FreshSection from './src/components/FreshSection';
```

### Option 3: Use Barrel Exports
```tsx
import {
  Header,
  StickyHeader,
  CategoryTabs,
  PromoBanner,
  FreshSection
} from './src/components';
```

---

## Benefits of This Refactoring

1. **Modularity**: Each component has a single responsibility
2. **Reusability**: Components can be reused in different parts of the app
3. **Maintainability**: Easier to update and debug individual components
4. **Testability**: Smaller components are easier to test
5. **Readability**: Clean, organized code with clear comments
6. **Type Safety**: TypeScript interfaces for props
7. **Style Organization**: Separated styles make it easier to maintain consistency
8. **Performance**: StyleSheet.create() provides performance optimization

---

## Customization Guide

### Changing Colors
Edit `src/styles/common.ts`:
```typescript
export const colors = {
  primaryPurple: '#YOUR_COLOR',
  primaryGreen: '#YOUR_COLOR',
  // ... other colors
};
```

### Adjusting Spacing
Edit `src/styles/common.ts`:
```typescript
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
};
```

### Adding New Products
Update the products array in `App.tsx`:
```typescript
const products = [
  {
    id: 11,
    name: 'Your Product',
    weight: '500g',
    price: 15,
    originalPrice: 30,
    discount: '₹15 OFF',
    deliveryTime: '10 mins',
    image: '🥑',
  },
  // ... more products
];
```

### Adding New Categories
Update the categories array in `App.tsx`:
```typescript
const categories = [
  { id: 'NewCategory', name: 'New Category', icon: '🆕' },
  // ... more categories
];
```

---

## Migration Steps

If you want to switch from the old App.tsx to the refactored version:

1. ✅ All component files are created in `src/components/`
2. ✅ All style files are created in `src/styles/`
3. ✅ App_Refactored.tsx is created with all components integrated
4. **Manual Step**: Test the refactored app
5. **Manual Step**: Replace App.tsx with App_Refactored.tsx when ready

---

## Notes

- The refactored code maintains all original functionality
- All animations and scroll behaviors are preserved
- The UI appearance remains identical to the original
- Device responsiveness (small, medium, large devices) is maintained
- All emoji icons are preserved for quick prototyping
