'use client'
import React from 'react';
import Box from '@mui/material/Box';
import { pink, teal, grey, red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const getDesignTokens = (mode : any) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#f6efef', secondary: '#f0e2e1' },
          text: {
            primary: '#181818',
            secondary: '#2e2e2e',

          },
        }
      : {
          primary: { main: '#181818', secondary: '#181818'  },
          text: {
            primary: '#fffffe',
            secondary: '#ddd6d6',
          },
        }),
  },
});

export default function ThemeColors({children} : any) {
  const [mode, setMode] = React.useState('light');
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
        {children}
      <Box
        sx={{
          position:'absolute',
          bottom: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'red',
          color: 'text.secondary',
          cursor: 'pointer',
          border: '2px solid black',
          width: 200,
          m: 10,
        }}
        onClick={toggleColorMode}
      >
        {`Click here to change to ${mode === 'dark' ? 'light' : 'dark'}`}
      </Box>
    </ThemeProvider>
  );
}
