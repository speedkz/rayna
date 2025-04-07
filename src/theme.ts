export const theme = {
  colors: {
    primary: {
      50: '#FFECE5',   // Lightest shade
      75: '#FCD2C2',
      100: '#FCB59A',
      200: '#FA9874',
      300: '#F77A4A',
      400: '#F56630',  // Base color
      500: '#EB5017',
      600: '#CC400C',
      700: '#AD3307',
      800: '#8F2802',
      900: '#711E00',  // Darkest shade
    },
  },
} as const;

// Type for the theme
export type Theme = typeof theme;

// Utility type to get color values
export type PrimaryColor = keyof typeof theme.colors.primary;

// Helper function to get primary color
export const getPrimaryColor = (shade: PrimaryColor): string => {
  return theme.colors.primary[shade];
}; 