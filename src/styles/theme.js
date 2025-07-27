const theme = {
  colors: {
    // Primary brand colors - Lighter blues for better visibility
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e'
    },
    secondary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d'
    },
    accent: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75'
    },
    
    // Light mode colors - Thoughtfully designed for optimal readability
    light: {
      background: {
        primary: '#ffffff',
        secondary: '#f8fafc',
        tertiary: '#f1f5f9',
        card: '#ffffff',
        hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        section: '#f8fafc'
      },
      text: {
        primary: '#0a0a0a',        // Near black for maximum contrast
        secondary: '#1a1a1a',      // Very dark for excellent readability
        tertiary: '#2d3748',       // Dark gray for good contrast
        muted: '#4a5568',          // Medium gray for secondary info
        subtle: '#718096',         // Light gray for subtle text
        inverse: '#ffffff',
        accent: '#2563eb',         // Primary blue for emphasis
        success: '#059669',        // Dark green for success states
        warning: '#d97706',        // Dark orange for warnings
        error: '#dc2626'           // Dark red for errors
      },
      border: {
        primary: '#e2e8f0',
        secondary: '#cbd5e1',
        accent: '#3b82f6'
      }
    },
    
    // Dark mode colors - Thoughtfully designed for optimal readability
    dark: {
      background: {
        primary: '#0a0a0a',        // Very dark for better contrast
        secondary: '#1a1a1a',      // Dark but not too dark
        tertiary: '#2d3748',       // Medium dark for depth
        card: '#1a1a1a',
        hero: 'linear-gradient(135deg, #1a1a1a 0%, #2d3748 100%)',
        section: '#1a1a1a'
      },
      text: {
        primary: '#ffffff',        // Pure white for maximum contrast
        secondary: '#f8fafc',      // Very light for excellent readability
        tertiary: '#e2e8f0',       // Light gray for good contrast
        muted: '#cbd5e1',          // Medium light for secondary info
        subtle: '#a0aec0',         // Light gray for subtle text
        inverse: '#0a0a0a',
        accent: '#38bdf8',         // Lighter blue for emphasis
        success: '#10b981',        // Bright green for success states
        warning: '#f59e0b',        // Bright orange for warnings
        error: '#ef4444',          // Bright red for errors
        highlight: '#fbbf24',      // Bright yellow for highlights
        code: '#34d399'            // Bright green for code elements
      },
      border: {
        primary: '#2d3748',
        secondary: '#4a5568',
        accent: '#38bdf8'
      }
    },
    
    // Status colors - Enhanced for better visibility
    status: {
      success: {
        light: '#059669',    // Darker green for light mode
        dark: '#10b981'      // Brighter green for dark mode
      },
      error: {
        light: '#dc2626',    // Darker red for light mode
        dark: '#ef4444'      // Brighter red for dark mode
      },
      warning: {
        light: '#d97706',    // Darker orange for light mode
        dark: '#f59e0b'      // Brighter orange for dark mode
      },
      info: {
        light: '#0284c7',    // Lighter blue for light mode
        dark: '#38bdf8'      // Lighter blue for dark mode
      }
    },
    
    // Neutral colors
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a'
    }
  },
  
  fonts: {
    families: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
      secondary: "'Poppins', 'Inter', 'Segoe UI', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
      display: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem',
      xxxl: '3rem',
      display: '4rem'
    },
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeights: {
      tight: 1.1,
      normal: 1.5,
      relaxed: 1.75
    }
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
    xxxl: '4rem',
    section: '6rem'
  },
  
  borderRadius: {
    none: '0',
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    xxl: '1.5rem',
    full: '9999px'
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    glow: '0 0 20px rgba(59, 130, 246, 0.3)'
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px'
  },
  
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
    spring: '0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  },
  
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    dark: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
  }
};

export { theme }; 