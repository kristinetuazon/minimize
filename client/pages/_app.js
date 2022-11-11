import "../styles/globals.css";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from "../createEmotionCache";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/quattrocento"
import "@fontsource/quattrocento-sans"

const clientSideEmotionCache = createEmotionCache();

const generalTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#7f867b',
    },
    secondary: {
      main: '#906449',
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
