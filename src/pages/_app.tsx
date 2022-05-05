import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import DefaultLayout from "../components/layout/default-layout";
import customTheme from "../theme";
import { IBasePageProps } from "../types";

function MyApp({ Component, pageProps }: AppProps<IBasePageProps>) {
    const title = "hundinwien.at";
    const description = "hundinwien.at liefert dir alle wichtigen Infos, wenn du einen Hund in Wien halten möchtest.";
    const url = typeof window !== "undefined" ? window.location.href : "#";

    const typedPageProps = pageProps as IBasePageProps;

    return (
        <ChakraProvider theme={customTheme}>
            <DefaultLayout header={typedPageProps.header}>
                <Head>
                    <title>{title}</title>

                    <meta name="description" content={description} />
                    <meta name="robots" content="noindex, nofollow" />

                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={url} />
                    {/* <meta property="og:image" content="tbd" /> */}

                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Component {...pageProps} />
            </DefaultLayout>
        </ChakraProvider>
    );
}

export default MyApp;
