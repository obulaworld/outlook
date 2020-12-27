import React from 'react';

export const themes = {
    light: {
      foreground: '#000000',
      background: '#fff',
    },
    dark: {
      foreground: '#ffffff',
      background: '#000',
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.dark // default value
  );