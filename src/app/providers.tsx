"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../lib/redux/reducers/setDarkOrLightMode";
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import 'media-chrome';


const getDesignTokens = (mode: any) => ({
  direction : 'rtl',
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // primary: { main: '#4fc4cf', secondary: '#f0e2e1', third: '#f6efef' },
          primary: { main: "#ffff", secondary: "#9d52db", },
          text: {
            primary: "#0f0e17",
            secondary: "#c395e8",
            background: "#ffff",
            notActive: "#0000003e"
          },
        }
      : {
        primary: { main: "#0f0e17", secondary: "#9d52db", },
        text: {
            primary: "#ffff",
            secondary: "#c395e8",
            background: "#292828",
            notActive: "#c395e875"


          },
        }),
  },
});
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin]
})

export function Providers({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  const darkOrLightState = useSelector(
    (state: any) => state.darkOrLightMode.darkOrLight
  );
  const [mode, setMode] = React.useState("light");
  const toggleColorMode = () => {
    dispatch(setTheme());
  };

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  useEffect(() => {
    setMode(darkOrLightState);
  }, [darkOrLightState, mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CacheProvider value={cacheRtl}>
        <ParallaxProvider>{children}</ParallaxProvider>
        </CacheProvider>
      </ThemeProvider>
    </>
  );
}
