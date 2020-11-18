// Relevant docs:
// * https://material-ui.com/guides/server-rendering/
// * https://nextjs.org/docs/advanced-features/custom-document
// Example:
// * https://github.com/mui-org/material-ui/tree/master/examples/nextjs

import React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from 'theme';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage;
        const sheets = new ServerStyleSheets();

        ctx.renderPage = () =>
            originalRenderPage({
                // useful for wrapping the whole react tree
                enhanceApp: (App) => (props) =>
                    sheets.collect(<App {...props} />),
                // useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            });

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: [
                ...React.Children.toArray(initialProps.styles),
                sheets.getStyleElement(),
            ],
        };
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* PWA primary color */}
                    <meta
                        name="theme-color"
                        content={theme.palette.primary.main}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
