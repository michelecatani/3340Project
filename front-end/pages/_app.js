import * as React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache, theme } from "../src/utils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [user, setUser] = React.useState("****");

  React.useEffect(() => {
    setUser(localStorage.getItem("User"));
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Head>
          <title>NeoBay</title>
          <meta charset="UTF-8" />
          <meta
            name="keywords"
            content="project,react, nextjs, NeoBay, Auction, Comp3340, 3340"
          />
          <meta name="author" content="The Squad 2022" />
          <meta
            name="description"
            content="This is our NeoBay auction site for COMP3340 World Wide Web Info System Dev."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
