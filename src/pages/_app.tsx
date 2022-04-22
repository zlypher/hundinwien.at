import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import DefaultLayout from "../components/layout/default-layout";
import customTheme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={customTheme}>
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        </ChakraProvider>
    );
}

export default MyApp;
