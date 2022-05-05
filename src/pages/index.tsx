import { Box, Container, Flex, Text } from "@chakra-ui/react";
import type { GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import { CustomContainer } from "../components/layout/container";
import { IBasePageProps } from "../types";

interface IHomeProps extends IBasePageProps {}

const Home: NextPage<IHomeProps> = props => {
    return (
        <>
            <CustomContainer>
                <Text>main</Text>
            </CustomContainer>
        </>
    );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<IHomeProps>> {
    return { props: { header: { headline: "Alles rund um den Hund in Wien", color: "blue.100" } } };
}

export default Home;
