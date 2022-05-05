import { Box, Container, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import type { GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import { CustomContainer } from "../components/layout/container";
import PageHeading from "../components/layout/page-heading";
import { links, ILinkResource, ILinkResourceCategory } from "../resources/links";
import { IBasePageProps } from "../types";

interface ILinksProps extends IBasePageProps {
    linkCategories: ILinkResourceCategory[];
}

const Links: NextPage<ILinksProps> = ({ linkCategories }) => {
    return (
        <CustomContainer>
            <Head>
                <title>Linksammlung | hundinwien.at</title>
            </Head>
            <PageHeading>Linksammlung</PageHeading>
            {linkCategories.map((category: ILinkResourceCategory) => (
                <React.Fragment key={category.name}>
                    <Heading as="h2" mb="4" mt="4" fontSize="x-large">
                        {category.name}
                    </Heading>
                    <List>
                        {category.links.map((link: ILinkResource) => (
                            <ListItem key={link.url}>
                                <NextLink href={link.url} passHref>
                                    <Link>{link.name}</Link>
                                </NextLink>
                            </ListItem>
                        ))}
                    </List>
                </React.Fragment>
            ))}
        </CustomContainer>
    );
};

export async function getStaticProps(): Promise<GetStaticPropsResult<ILinksProps>> {
    return {
        props: {
            linkCategories: links,
            header: {
                headline: "Verwandte Seiten rund um das Thema Hund",
                color: "purple.100",
            },
        },
    };
}

export default Links;
