import { Box, Container, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";
import React from "react";

interface IPageHeadingProps {
    children: React.ReactNode;
}

const PageHeading: NextPage<IPageHeadingProps> = ({ children }) => {
    return (
        <Heading as="h1" mb="8">
            {children}
        </Heading>
    );
};
export default PageHeading;
