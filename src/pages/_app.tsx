import React, { ReactChild } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import GoogleFonts from 'next-google-fonts';
import { CssBaseline, Container, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';

function MyApp({ Component, pageProps }: AppProps): ReactChild {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <CssBaseline />
            <GoogleFonts href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={theme}>
                <Box minHeight="90vh">
                    <Container component="main">
                        <Component {...pageProps} />
                    </Container>
                </Box>
                <Box textAlign="right" component="footer">
                    <Container>{"Let's build something cool ❤️"}</Container>
                </Box>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
