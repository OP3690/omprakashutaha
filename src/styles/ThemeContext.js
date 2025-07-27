import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './theme';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme preference or default to light mode
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update document class for global styling
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Create theme object based on current mode
  const currentTheme = {
    ...theme,
    isDarkMode,
    colors: {
      ...theme.colors,
      background: isDarkMode ? theme.colors.dark.background : theme.colors.light.background,
      text: isDarkMode ? theme.colors.dark.text : theme.colors.light.text,
      border: isDarkMode ? theme.colors.dark.border : theme.colors.light.border,
      // Enhanced status colors based on mode
      status: {
        success: isDarkMode ? theme.colors.status.success.dark : theme.colors.status.success.light,
        error: isDarkMode ? theme.colors.status.error.dark : theme.colors.status.error.light,
        warning: isDarkMode ? theme.colors.status.warning.dark : theme.colors.status.warning.light,
        info: isDarkMode ? theme.colors.status.info.dark : theme.colors.status.info.light,
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}; 