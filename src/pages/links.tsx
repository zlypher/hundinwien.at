import { Box, Container, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";
import React from "react";
import { CustomContainer } from "../components/layout/container";
import PageHeading from "../components/layout/page-heading";
import { links, ILinkResource, ILinkResourceCategory } from "../resources/links";

interface ILinksProps {
    linkCategories: ILinkResourceCategory[];
}

const Links: NextPage<ILinksProps> = ({ linkCategories }) => {
    return (
        <CustomContainer>
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

export async function getStaticProps() {
    return { props: { linkCategories: links } };
}

export default Links;