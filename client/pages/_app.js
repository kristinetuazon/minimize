import "../styles/globals.css";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from "../createEmotionCache";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/quattrocento"
import "@fontsource/quattrocento-sans"
import {useEffect} from "react";


const clientSideEmotionCache = createEmotionCache();

const generalTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#7f867b',
      light: '#989E95',
      dark: '#585D56',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#906449',
      light: '#A6836D',
      dark: '#644633',
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#e3e4e0',
      paper: '#d4c8be',
    },
  },
  typography: {
    fontFamily: 'Quattrocento Sans',
    fontSize: 15,
    fontWeightRegular: 400,
    fontWeightBold:700
  },
});

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
    }
}, []);

  return (
    <>
     <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={generalTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
